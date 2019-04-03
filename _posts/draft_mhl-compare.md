## What I learned from making mhl-compare

It's a command line utility that when given two MHL files, will tell you the differences between the two.

## What are MHL files?

A media hash list file is a small metadata file that basically contains a unique signature of a given set of media files. If you create an MHL file, you have a point of comparison for those files' integrity and can clearly see later down the track if the files have been modified, corrupted or made missing, because their original state is recorded and can be compared against later.

The standard was designed for use in digital cinema, television and other media producing sectors of the industry, by German software company Pomfort. It is a human-readable XML format and the standard is open and available.

A technician who receives a storage card with digital media files, will create copies of those files in various locations. Depending on the tool they use, an MHL file can be generated and it will sit inside the same folder as those media files. It'll be quite small in size, typically a couple of hundred KB.

Later, when other members of the post-production process begin to get involved and handle the media, they can at anytime compare the media files themselves to the signatures stored inside the MHL file. The signature is of course a checksum hash [Wikipedia]. Comparing is done by one of a few programs that interpret MHL files: SealVerify, Checkpoint and the MHL reference tool. The tool will clearly report if any file has changed from what was recorded earlier. Technicians can then take action to cross-check their media files for quality, observe what might have happened or changed, and try to seek another set of copies if available or necessary. At least the fact that there is a modification in the file set will now be made clear to them.

Discovering the existence of file integrity issues or accidental modifications is difficult to do when files are just simply stored as files in a file system, and nothing more than macOS Finder is used. There are many opportunities for files to be modified without the user even knowing.

- Spotlight
- Adobe Prelude modifying metadata directly inside QuickTime files
- Adobe Bridge modifying metadata

## mhl-compare

How does mhl-compare work?

It was written as a quick-run script in Python, but as I got further into the concept, it branched out into more of a command-line utility.

I now have plans to make a general MHL tool (perhaps called `mhltool`) with my own implementation for creating and verifying MHL files against the real file sets, but with also the added feature of being able to supplement MHL files with more data and to add additional hashes.

For example, ShotPut Pro allows for hash creation with XXHash and MD5, but not both at the same time. XXHash is substantially faster for most transfers (depending on the hardware) so that is the best choice for time-strict data dumping on set rather than MD5. However, many post houses still prefer to work with MD5 anyway. So currently, after the initial copy is run with ShotPut I have to run `md5deep` on the directory and generate a separate md5 file there. Now that produces two checksum files. Perhaps it may be useful to be able to update an MHL file with additional hashes to describe its files. Before committing those new hashes to the list, the program would need to verify that the real file set does indeed match the existing hashes in the list. Otherwise we may have a case of file A with the XXhash (`sd8f97sds`) recorded at the time of copy, but with differences in the file now (`asda89sd`). If we make a new MD5 sum of this file, it won't be recognisable and both will be treated as signatures of the file despite being signatures of literally different states.

## Techniques learned in Python

* Parsing XML files
* Traversing a dictionary structure: dealing with when keys don't exist, or when the structure of the dictionary is different to what you are expecting
* Delta and differences
* Objects and classes
  * Hashing the objects and changing how they are hashed, affecting comparisons made between
