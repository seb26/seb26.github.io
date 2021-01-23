---
title:          "Offload video footage from an iPhone with checksums"
slug:           offload-video-footage-from-an-iphone-with-checksums
date:           20200927T17:00:00+11:00
dateModified:   20200927T17:00:00+11:00
description:    |
  How do you rescue the video recordings from a phone? Here's a native way to get MD5 checksums in an MHL format on iOS 13 devices.

classes:        "blog-workflow nav-static"
categories:     workflow filmmaking data_wrangling
location:       Sydney
country:        Australia

blogGalleryLightbox:
  directoryPrefix:    "/post/img/"

thumbnail:
  url:    "/post/img/20200927_create_mhl_file_on_ios_sebastian_reategui.png"
  name:   "20200927_create_mhl_file_on_ios_sebastian_reategui"


---

With the ubiquitous iPhone encroaching its way into film and TV production, there will be some point where someone will ask you to copy off video recordings from an iPhone.

How do you rescue the video recordings from that phone? The mechanisms that we typically use for processing regular digital cinema cameras (Arri, RED, Sony) are not the same.

The iPhone records to its own internal memory, not a removable mag or card. Its OS is closed and limits you to access it via iTunes, or through Finder on macOS Catalina. Neither method can expose the recorded media files in an easy way to offloading programs like [Silverstack](https://pomfort.com/silverstack/), [YoYotta](https://yoyotta.com/) or ShotPut Pro.

Enter 'Create MHL file' for iOS, a native way to obtain checksums on iOS devices running iOS 13 and up, implemented using the Shortcuts app.

**How does it work?**

After adding it, the Shortcut appears in the Share menu.

So anywhere you can 'pick' a file - either in Photos.app, Files.app or Filmic Pro, you can generate an MHL for those files, with the checksums of each media file described within.

Then use existing copying methods (iTunes, Finder or AirDrop) to perform the actual transfer of the media files from the iOS device to your data computer.

Confirm that each media files matches the MHL you generated on the iPhone.

Place this MHL file in the same root folder as your newly-copied iPhone media files, both within your structure of OCN files and your backups, and throughout handovers and archival.

### Install

**[This is the link to the Shortcut](https://www.icloud.com/shortcuts/47eec5d5620b4d19b046f764d3eedbd6)**, v1, dated 2020-09-27, or the full URL below:

[`https://www.icloud.com/shortcuts/47eec5d5620b4d19b046f764d3eedbd6`](https://www.icloud.com/shortcuts/47eec5d5620b4d19b046f764d3eedbd6)

- Click the link above inside a browser on your iOS device itself
- Choose 'Get Shortcut'
- 'Add Shortcut' window appears
- Scroll all the way to the bottom, past all of the steps of the program itself
- Choose `Add Untrusted Shortcut`
- The Shortcut should now be installed, and visible from the Share panel of any file-based picker within iOS
- It is not a separate app or icon on the Home screen, you access it from the Share panel.

### How to use it

- Select the files you wish to checksum, from any file picker in iOS (Photos, Filmic Pro, anywhere with a 'Share' option)
- Choose 'Create an MHL file'
- Give the MHL file a name (it automatically includes the date to start with)
- Wait momentarily for checksums to be created
- Return to the Files app > Shortcuts folder
- See your `.mhl` file there, and copy it off iOS by AirDrop, email, or other

An example workflow would be:

- Get handed an iPhone with video footage recorded on Filmic Pro
- Install the Shortcut from the URL above
- Navigate to Files app > 'Filmic Pro' folder
- Select all video files > Share > 'Create an MHL file'; Name it
- AirDrop your video files
- AirDrop your MHL file, which saves to `Shortcuts` directory in 'On My iPhone'.
- Verify the MHL file using [Pomfort SealVerify](https://pomfort.com/sealverify/), YoYotta, or another verification program.

### Development

For those reading outside of familiarity with film & TV post-production workflows, checksum hashes are a very common means of providing a tangible, documented 'identity' of media files that pass through the pipeline. They help both in (a) data management to ensure subsequent copies of original media files are in identical state to the time they were drawn from the camera cards; and (b) during all of the other stages long after the shoot like conform, VFX and archival where media files are changing hands multiple times (across hard drives, Internet uploads, LTO tape restores).

MD5 is the most common hashing algorithm in use. But XXHash-64 is a newer, more efficient favourite and is almost just as commonplace. The SHA family of algorithms are not typically employed.

For recordings from an iPhone or iOS device, it would be fantastic to provide checksum hashes as well and permit them the same identification throughout the post pipeline.

I've employed the Shortcuts app as a basis to implement this.

The Shortcuts app allows users to create 'functions' which repeat basic tasks within the OS, like 'send loved one a preset text message then show directions to home'.

It's a fascinating direction that Apple has taken its development in, as it includes quite a functional base of options, from logical controllers (if, else, case), handling of types (numbers, text, dates) and named variables.

I was surprised to find that Shortcuts also featured a "generate hash" action, assumedly to provide a secure way to store user input like passwords, with MD5 and SHA offered as algorithms.

Could this same function be used to work on files?

Could those hashes then be laid out in an MHL file, along with other metadata, enabling them to be checked by the myriad of data verification tools available?

The answer was an exciting yes.

### Some improvements that could be made

- Can it save MHL files to the original location of the files? Assumedly not in all cases: e.g., if the media originated from the Photos.app, surely a Shortcut cannot write non-media files there

- Can it combine AirDrop with generation of the MHL file, in one single action?

- Could it allow you to run a verification check **on** the iOS device itself? Tricksy stuff.

- Could it use XXHASH checksums instead of (or in addition to MD5)? Very unlikely. XXHASH is a third-party library. I'm not going to get greedy here, given I'm already astonished that Apple permits users to manipulate programming-like tools within their closed system.

- There may be room to establish this app through Pythonista, but I'm hesitant to add dependencies and appreciate the simplicity of one shortcut that functions natively. At that point, it would best to consider a proper iOS Cocoa app.

### A real-world use case

On a production that I worked on recently, vertical front-camera footage was shot on an iPhone Xs Max using Filmic Pro, designed to be comped onto the show's 4K UHD timeline along with main camera footage, to depict the two people on either side of a video call.

My usual way of offloading was using a Lighting to USB-C cable and iTunes on macOS Mojave.

I'd connect the device, select its icon in iTunes, and nav to "On My iPhone" -> Files -> Filmic Pro and see media files listed there, choosing 'Save As' and setting the directory to my RAID volume.

Following the transfer's completion, I'd run the folder of files on the RAID through YoYotta (v3.0 161) to create a thumbnail PDF and an MHL file, essentially 'baptising' it like all other camera footage.

Despite repeating this without any trouble on multiple shoot days with iPhone footage, on a recent one I encountered a weird glitch.

Adding the folder of iPhone media files to a YoYotta job and choosing 'Verify' would complete successfully, but:
- I could no longer quick-preview the files in Finder;
- The files no longer had a thumbnail shown in Finder; and, worse still,
- The files vanished from Resolve's Media Pool picker, meaning they weren't recognised as having a valid file header which would make them addable to the media pool.
- Selecting the files manually through File > Import closed the Import dialog without any error message and no file was added to the media pool.

In other words, they had been modified somehow **after** the iTunes copy but **before** processing in YoYotta.

And were no longer recognisable as valid .MOV files.

In this instance, I didn't have time to investigate what was to blame, so I trashed this now flawed set of media files and created a new copy using AirDrop, so as to try a different transfer method.

Resolve recognised them and I transcoded them successfully to get that out of the way, and then used YoYotta's verify & add to index, instead of running a job.

Regardless of the cause (YoYotta likely), my solution or the following steps, what had occurred was essentially: **inadvertent modification to original camera files**.

This is what we try to avoid at all costs.

A record of checksums could certainly have been handy in this case.

Writing the media files to LTO, depending on the program and if it parsed MHL files, would have flagged as an alert or report that the files in question didn't match their identity at the time of copy.

YoYotta's manipulation of the files (whether that be operator error on my part or a program bug) is actually just an example of a destructive action taking place at a hardware, software or human level, and could take place at any time.

Humans do make mistakes, especially those working late at night, and software programs do as well, no matter how battle-tested they are (think [when iTunes deleted the entire music collection of a user and Apple sent an engineer to the user's house to investigate](http://web.archive.org/web/20161125043005/https://blog.vellumatlanta.com/2016/05/04/apple-stole-my-music-no-seriously/)).

### Final words

This tool and its development was completely *extra* and wasn't really calling to be made.

It's also clunky and needs other modifications to make it more user-friendly.

My brief success in developing a working version means it has validity as a proof-of-concept but not necessarily as a critical or mandatory step that demands implementation in all cinema workflows with iPhone.

We have been squeezing footage off of iPhones for use in cuts for a long time using the conventional means listed above and without the need for such a tool, and off other devices with unusual interfaces.

Often times, checksums are merely generated after copy, and provided that a human has done a basic QC, these checksums would be valid throughout the rest of post-production as well.

Additionally, checksums by themselves don't wield that power to determine if footage is flawed or not, only humans can do that through manual playback.

That is to say, **watching back the footage on an iPhone after AirDropping it to your Mac is actually more of an important integrity check**, because you and your eyes will determine if it plays back correctly, if the clips don't end early.

But I suspect there is utility in documenting the state of a file on iOS and being able to confirm that a subsequent copy does not deviate from the original, as a result of file corruption, metadata changes, user error or trimming.

Especially since we demand this from original camera media files at all stages.
