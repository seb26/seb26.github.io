---
title:          "Quickly previewing CDL files in macOS Finder with this QuickLook plugin"
slug:           quickly-previewing-cdl-files-in-macos-finder-with-this-quicklook-plugin
date:           20210525T09:00:00+10:00
dateModified:   20210530T18:00:00+10:00
description:    |
  description

classes:        "blog-workflow nav-static"
categories:     workflow colour data_wrangling
location:       Sydney
country:        Australia

blogGalleryLightbox:
  directoryPrefix:    "/post/img/"

thumbnail:
  url:    "/post/img/20210525_cdl_quickpreview_banner.jpg"
  name:   "20210525_cdl_quickpreview_banner"


---

I have often needed a quick way to review the contents of a `.cdl` file.

[CDL files](https://en.wikipedia.org/wiki/ASC_CDL) contain ASC-SOP and SAT values which are used to transfer colour grading information between programs.
<br><br>
In simpler words, they are a set of creative instructions to push red, green or blue values of an image in a particular way.
{:.callout-info}

Sure, it can be quickly opened and understood using a text editor since the structure of an ASC-CDL file is XML.

But if you have 20 to 30 `.cdl` files, each for one clip on a camera roll, you need a quicker way to view those values.

{% include blogGalleryLightbox name="20210525_cdl-quickpreview-1.png" %}
An example of the QuickLook preview window on an example `.cdl` file in Finder in macOS Mojave 10.14.6 with Dark Mode.
{:.caption}

It is obviously not a great visual way of understanding the colour instructions, as you can only see the numbers themselves:

`<Slope>1.13947 1.13502 1.13947</Slope>`, and so on.

But this is enough for me to quickly determine if two or more grades are the same, since I can see if the numeric values inside are identical.


### A plugin for Finder on macOS

The above is achieved using a plugin for Finder's QuickLook function, installed into the user's Library folder.

Fabio Lecca ([@fabiolecca](https://github.com/fabiolecca)) wrote this QuickLook plugin to display XML files: [**colorxml-quicklook** on GitHub](https://github.com/fabiolecca/colorxml-quicklook).

I have simply modified it to support `.cdl` files.

This is done by adding an extra entry to `LSItemContentTypes` inside `Info.plist`, which is the dyn signature of the file:
```
# Line 16
+        <string>dyn.ah62d4rv4ge80g3dq</string>
```

Lecca has welcomed additions of other XML filetypes to the program, but I can't find a working email address for him.

And I otherwise needed the functionality immediately, so I made the change myself first.

I also include it for for download below, with links and credit back to Lecca's repo.

### Download

Download link: [**colorxml.qlgenerator_(seb_cdl).zip**](https://gist.github.com/seb26/72c19a9b0a54bf2d09120f91b0221e29/raw/e93073749458adafc7307beb95f3231c4b6ccd45/colorxml.qlgenerator_(seb_cdl).zip) (GitHub Gist)

Originally forked from [**colorxml-quicklook** on GitHub](https://github.com/fabiolecca/colorxml-quicklook), authored by Fabio Lecca.

### Install

1. Unzip `colorxml.qlgenerator_(seb_cdl).zip`
2. In Finder, Go -> Go To Folder (Shift+Cmd+G): `~/Library/QuickLook`
3. Paste the `colorxml.qlgenerator` file inside.
4. Relaunch Finder

### Compatibility

Tested on macOS Mojave 10.14.6. No other OS variants tested to date.
