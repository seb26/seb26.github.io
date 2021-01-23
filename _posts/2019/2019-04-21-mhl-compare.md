---
title:          "Process: What I learned from making mhl-compare"
slug:           process-what-i-learned-from-making-mhl-compare
date:           2019-04-21T11:00:00+15:00
dateModified:   2019-04-21T11:00:00+15:00
description:    |
  You give it two MHL files and it reads them, works with the described list of media within, compares each media file's filename, path, size, hash and modified-date strings, and reports to the user a variety of different outcomes.
classes:        "blog-workflow nav-static"
categories:     workflow programming data_management data_wrangling
location:       Sydney
country:        Australia

thumbnail:
  url:    "/post/img/20190421_mhlcompare_thumb.jpg"
  name:   "20190421_mhlcompare_thumb"

---

It's a command line utility that when given two MHL files, will tell you the differences between the two.

## What are MHL files?

A media hash list file is a small metadata file that basically contains a unique signature of a given set of media files. If you create an MHL file, you have a point of comparison for those files' integrity and can clearly see later down the track if the files have been modified, corrupted or made missing, because their original state is recorded and can be compared against later.

The standard was designed for use in digital cinema, television and other media producing sectors of the industry, by German software company [Pomfort](https://pomfort.com). It is a human-readable XML format and the [standard is open and available](https://mediahashlist.org).

A technician who receives a storage card with digital media files, will create copies of those files in multiple locations. Depending on the tool they use, an MHL file can be generated and it will sit inside the same folder as those media files. It'll be quite small in size, typically a couple of hundred KB.

Later, when other members of the post-production process begin to get involved and handle the media, they can at anytime compare the media files they have now, to the [checksum hashes](https://en.wikipedia.org/wiki/Checksum) preserved inside the MHL file. Comparing is done by one of a few programs that interpret MHL files: Silverstack, [SealVerify](http://pomfort.com/sealverify/), [Checkpoint](https://hedge.video/checkpoint) and the basic [MHL reference tool](https://mediahashlist.org/reference-implementation/). The tool will clearly report if any file has changed from what was recorded earlier. Technicians can then take action to cross-check their media files for quality, observe what might have happened or changed, and try to seek another set of copies if available or necessary. At least the fact that there is a modification in the file set will now be made clear to them.

## Why so much concern over media files suddenly being changed?

There are many opportunities for files to be modified without the user even knowing. Discovering the existence of file integrity issues or accidental modifications is difficult to do when files are just simply stored as files in a file system, and nothing more than macOS Finder is used.

If media is changed from its original state, it may have actually become damaged and become unreadable (like broken or corrupt files) which are of course unusable. If they are modified inadvertently, their use in the later stages of post-production is compromised because they may be treated differently by different programs.

Some examples:
- Adobe Prelude has been caught out modifying metadata directly inside QuickTime files
- Adobe Bridge will modify metadata when you change values in its Metadata column

## mhl-compare

How does mhl-compare work?

It was written as a quick-run script in Python, but as I got further into the concept, it branched out into a command-line utility.

You give it two MHL files and it reads them, works with the described list of media within, compares each media file's filename, path, size, hash and modified-date strings, and reports to the user a variety of different outcomes, like:

* A media file has been modified
* A media file has had its name changed, but its content is the same (hash is the same)
* A media file exists in both lists, but doesn't have comparable hashes

```
--------------
mhl-compare (v0.3) (Python) (Author: Sebastian Reategui) (MIT License)

1st MHL file: samples/a01.mhl
              22 files
              1.7 GiB (1845943311 bytes)
2nd MHL file: samples/a02.mhl
              20 files
              1.3 GiB (1377904103 bytes)

Observations:
    19 files matched, but with differences in name, directory or modification date
    2 files had different hashes. The files were likely different at the time the MHLs were generated
    1 file was present only in one MHL or the other
    1 file was a duplicate, as it had the same hash as another file

    Run the check again with --info to view details.
--------------
```

I chose to make the default printed output to be brief and short, only a tally-number list of what's different, so you can quickly make a conclusion from it. A `--verbose` option exists to actually list the files and show in detail what attributes are different.

## Download mhl-compare

You can find the latest binary for Mac, and the source code at the [repository on GitHub](https://github.com/seb26/mhl-compare).

## Techniques learned in Python

* Parsing XML files
* Traversing a dictionary structure: dealing with when keys don't exist, or when the structure of the dictionary is different to what you are expecting
* Delta and differences
* Objects and classes
  * Hashing the objects and changing how they are hashed, affecting comparisons made between


## Future plans

I now have plans to make a general MHL tool (perhaps called `mhltool`) with my own implementation for creating and verifying MHL files against the real file sets, but with also the added feature of being able to supplement MHL files with more data and to add additional hashes.

For example, ShotPut Pro allows for hash creation with XXHash and MD5, but not both at the same time. XXHash is substantially faster for most transfers (depending on the hardware) so that is the best choice for time-strict data dumping on set rather than MD5. However, many post houses still prefer to work with MD5 anyway. So currently, after the initial copy is run with ShotPut I have to run `md5deep` on the directory and generate a separate md5 file there. Now that produces two checksum files. Perhaps it may be useful to be able to update an MHL file with additional hashes to describe its files. Before committing those new hashes to the list, the program would need to verify that the real file set does indeed match the existing hashes in the list. Otherwise we may have a case of file A with the XXhash (`sd8f97sds`) recorded at the time of copy, but with differences in the file now (`asda89sd`). If we make a new MD5 sum of this file, it won't be recognisable and both will be treated as signatures of the file despite being signatures of literally different states.
