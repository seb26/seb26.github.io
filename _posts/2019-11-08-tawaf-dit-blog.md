---
title:          "Process: Tawaf, a slow-mo, long-take music video on rooftops and in the bush"
slug:           process-tawaf-slow-mo-long-take-music-video-rooftops-in-the-bush
date:           20191109T17:00:00+11:00
dateModified:   20191115T12:00:00+11:00
description:    |
  To hedge all our bets and improve our chances of getting a clean image to work with and flexibility to make changes down the line, we went with the top option available for the camera body.

classes:        "blog-workflow nav-static"
categories:     workflow filmmaking video_editing data_wrangling
location:       Sydney
country:        Australia

blogGalleryLightbox:
  directoryPrefix:    "/post/img/"

thumbnail:
  url:    "/post/img/20191108_(photo_20191006)-tawaf-dit-9269.jpg"
  name:   "20191108_(photo_20191006)-tawaf-dit-9269"


---


This is an insight post into the production workflow of the music video *Tawaf*, from the perspective of the camera department & data management.

**Contents**
* TOC
{:toc}


### Directorial goals
***Tawaf*** is a visual soundtrack envisioned by filmmaker and music producer Kaan Cansiz ([@kaansaesthetic](https://www.instagram.com/kaansaesthetic/)).

It annotates the album [*A Quiet Farewell, 2016 to 2018*](https://slausonmalone.bandcamp.com/album/a-quiet-farwell-2016-2018) by [Slauson Malone](http://slausonmalone.com).

Its style is characterised by wide open spaces, in natural environments and urban areas.

It often pits its characters in portrait form, and at other moments glowing by sunset. Long moments in time linger and run their full course.

To translate some of these ideas into picture, there were a number of techniques that could be put into play.

I observe Kaan's creativity as inherently experimental and natural, drawing himself to concepts primarily by music, not necessarily being literal. In this context I see light as capable of being both a feeling and a texture.

But most of all, from the experimental origins of the project, I knew that committing changes or techniques destructively to a medium was going to be something that could ultimately inhibit further experimental choices.

This extends to the capture format used but also to lighting choices, colour, and the edit itself.

So why not shoot 4.6K RAW?

[Cries in Spanish]

This article talks about the rather incidental choice to use both RAW capture and high resolution to hedge our bets and enable as many creative choices and options further down the line.

It'll also touch on Blackmagic RAW as a codec being used in the field & practical considerations for doing so.


**Principal crew**
* Director: Kaan Cansiz
* Director of Photography: Trudi Gultom
* Producers: Karen Hà, Leslie Phanekham
* First Assistant Director: Alysia Kwan
* First Assistant Camera: Stephanie Todd
* Gaffer: Steven Chen
* DIT: Sebastian Reategui

**Shoot details**
* Shoot days: 4 and a half-day
* Locations: Liverpool & Blacktown, NSW

### Cameras

The camera body was Blackmagic's URSA Mini Pro G1 (PL mount), primarily on sticks, with shoulder attachment, and partially on a Steadicam rig. DOP Trudi Gultom chose Zeus Superspeeds, shooting mostly wide open.

We also used the Blackmagic Pocket 4K with Metabones PL mount adapter on a DJI Ronin gimbal apparatus, as an additional primary cam for a variety of setups.

Our 1st AC Stephanie Todd pulled focus using PDMovie Remote Air and monitored on a Blackmagic 7" Video Assist 4K. Diamond Tat, Gerard Cabellon and Bobi Perdulovski supported on alternate days.

Tyron Seeto served as Steadicam operator, and Steven Chen, Zaid Chowdhury and Bobi Perdulovski as Ronin operators.

{% include blogGalleryLightbox name="20191108_(photo_20191006)-tawaf-dit-9204.jpg" %}
(Photo: Thắng Nguyễn)
{:.caption}

{% include blogGalleryLightbox name="20191108_(photo_20191008)-tawaf-dit-256f.jpg" %}
(Photo: Leslie Phanekham)
{:.caption}

### Format choice

The format chosen was BRAW 5:1 compression, at 4.6K resolution (4608 x 2592, 16:9).

The project frame rate was 25 FPS, and about 90% of our shots were at off-speed 50 FPS.

This gave an average data rate of 774 Mbps (~96 MB/s, ~348 GB/hour, 21 min per 128 GB card) at 25 FPS.

To give a comparison rate, ProRes 4444 at the same resolution would have been 1.5 Gbps (187.5 MB/s, ~670 GB/hour, 11 min per card).

This is nearly double the size. That's right, ProRes 4444 at this resolution, double the size of BRAW.

Blackmagic's BRAW really is contrary to people's existing expectations for RAW capture: unmanageably high file sizes and long transfer times. And it was certainly the case with their previous implementation of CinemaDNG. (I don't envy anyone who captured longform material using CinemaDNG.)

But the format has clearly been designed quite well in terms of efficiency.

Its data rate is about on par with RED DSMC2 these days @ 5K HD which is roughly 800 Mbps (~360 GB/hour). It's also drastically lower than ARRIRAW on the Alexa LF @ 4.5K which is a whopping 4,175 Mbps (1.8 TB/hour). However this speaks more about those manufacturers' approach to streamlining RAW capture than anything else.

The relatively non-noticeable noise floor that I witnessed throughout the footage at ISO 800, however, can probably be credited to [a November 2018 firmware update for the URSA Mini](https://www.blackmagicdesign.com/support/readme/42b11f6891ad4877b9fd08214d4297c5) that altered its native ISO level. But still good to prevent further noise or compression artifacts from the capture method, if one has the option to.

A side note is that RAW capture on this camera necessitates 4.6K capture as well. Any lower settings and you get windowed sensor mode, disturbing a DOP's framing and focal length choices.

This is because cropping or rescaling sensor data is not an easy operation for RAW formats like it is for an already processed RGB signal in ProRes. Both Blackmagic and RED cameras window the sensor and take fragments from it in order to deliver a smaller resolution RAW image which isn't ideal for those seeking wide angle framing.

<div>
<p><strong>Side note on the Pocket 4K as a B-cam</strong></p>
<p>If you are pairing the Blackmagic Pocket 4K with the URSA Mini, the Pocket obviously won't be able to exactly match the URSA Mini's 4.6K resolution. It only provides 4K DCI (4096 x 2160) and 4K UHD (3840 x 2160), and the latter is windowed-sensor mode to achieve this. My recommendation is to use 4K UHD because the 16:9 aspect ratio will match the 4.6K 16:9 provided by the URSA Mini.</p>
<p style="margin-bottom:0;">The windowed sensor mode will really only crop off 256 pixels which is marginal. Then, virtually no extra operations are required in post because the aspect ratio matches. There are <em>many</em> places where a different ratio will generally cause extra hurdles (all the way from dailies to the online).</p>
</div>
{:.callout-info}


### Colour and monitoring
Our capture colour profile was BMD Film and our monitoring profile was BMD Video v3.

Even though Trudi and Kaan ran through a number of test shoots prior to the date, time didn't permit the creation of a custom LUT at this point, but it would have been helpful as a way to shape the look a bit and support our lighting setups more appropriately.

With about 3-4 different monitors, it became difficult at certain moments to assess which 'version' of the image is the closest to the capture. We used the onboard LCD panel, two SmallHD 502 monitors in various mount positions, a Blackmagic 7" Video Assist and two Atomos Shoguns, across our A and B cams.

In spite of differences in monitor presentation, which can amount to screen brightness, colour tint, reflections and the sharpness of the LCD panel (e.g. Atomos Shogun versus Blackmagic Video Assist 4K, the latter's LCD panel is noticeably sharper to my eyes.), histograms and false colour remain the go-to tools for assessing exposure.

{% include blogGalleryLightbox name="20191108_(photo_20191006)-tawaf-dit-9259.jpg" %}
(Photo: Thắng Nguyễn)
{:.caption}

### Challenges

While most of the capture and data management went smoothly across the five days, one major issue stuck out like a sore thumb.

It's afternoon on Day 1 and we're chasing sunset and the successful capture of a long choreographed dance sequence, to run for 2 minutes uninterrupted in the final film.

{% include blogGalleryLightbox name="20191108-tawaf-dit-set-photo-by-alysia-kwan-4.jpg" %}
Photo: Alysia Kwan
{:.caption}
{% include blogGalleryLightbox name="20191108-tawaf-dit-example-still-dancing.jpg" %}

I notice after perhaps our 8th take, the camera's record LED on the operator side of the body was flashing red.

We had been fighting the space on the cards the whole day throughout splits, so I suspected it was trying to indicate the card was nearly full for this split.

In reality, a warning (!) symbol had appeared onscreen, revealing the last take had stopped due to drop frames.

The whole take, and potentially the seven earlier takes, were at risk -- were they even really recorded properly? Did we just lose that many performances at such a valuable time at sunset and everyone's effort?

I only recall seeing the flashing LED on the last take only, so the operator checks playback and it plays mostly fine. Everyone chats and we decide to try go for another one. I'm staring at the external LED during this take, waiting for it to flash and hoping it doesn't.

It does. Flashing red. I quietly call out to Trudi to end it - it's clear the take isn't recording, let's stop.

Camera crew switches to a different SATA SSD and I take this present one back to wrangle it and inspect which recordings are in tact.

Takes 1 through 7 are preserved and fine, there's no corruption or issues with playback. Takes 8 and 9 end abruptly (but cleanly) during the performance about midway. It meant those takes were basically lost, since the director needed a full uninterrupted performance to use.

{% include blogGalleryLightbox name="20191108-tawaf-dit-clips-dropped-frame-example.png" %}
A visual example of the takes running 2-3 minutes long. Takes 8 and 9 are on top, and are noticeably shorter in duration than their companions.
{:.caption}

Some reprieve: our Steadicam operator Tyron had been monitoring via SDI to his Shogun display rigged to the apparatus and was also recording that signal to an internal drive. Steph also recorded the SDI signal through the BM Video Assist onto an SD card, as we wanted playback access earlier.

Having these recordings saved the day: luckily they were clean, at 1080p ProRes 422 which was reasonable, and had no UI overlays burnt in either.

The whole ordeal was particularly odd because we filled up least one SATA SSD (Samsung 860 EVO 500GB) at 4.6K BRAW 5:1 at 50 FPS with no single issue throughout the entire morning.

The final verdict however: URSA Mini G1 with firmware 6.2 still suffered from frames dropping when writing to some SATA SSDs via the SSD attachment unit, at least at 4.6K BRAW 5:1 at 50 FPS. The SSD in question was a Samsung 250GB 960 EVO. After the shoot, a firmware update to the latest available on the date (6.5.1) resolved the issue, but for the rest of the shoot, we only trusted CFast cards.


**Warning to the wise**
<br>
Prior to your shoot with different media types (CFast, SATA or USB-C SSD), always test all of your recording media at all frame rates and formats that you plan on using. Run clips for at least a minute or longer, to ensure that they can last a whole take and will remain recording without any dropped frames. Don't leave it to the shoot unless you want to lose takes & production time.
{:.callout-danger}

Additionally: make sure to send status indicators over SDI to at least one operator to refer to, especially if in a rig configuration where the LCD onboard the URSA Mini is closed and not accessible. Otherwise you will be blind to any errors visible on the UI like, frames dropped during recording.

Other questions that remain over the heads of users of SATA SSDs:
- Does your SATA SSD offer a write speed high enough to support the format, resolution and FPS your camera is demanding?
- Will it sustain that write speed or will it taper off after its cache is filled? (Hint: [Many won't sustain it](https://www.howtogeek.com/428869/ssds-are-getting-denser-and-slower-thanks-to-qlc-flash/).)
- Are all hardware devices running the latest firmware?
- Are you formatting the SATA SSD in-camera as OS X Extended and avoiding non-journaled filesystems like EXFAT wherever possible?

### Dailies

I offloaded to a 2TB Samsung SSD and two client external HDDs.

My choice of offload manager these days is YoYotta. I appreciate its ability to stop and resume transfers and for its transparency in reporting to me the exact transfer speed in MB/s. (Unlike ShotPutPro which omits such details probably for simplicity.)

Reading from a USB 3.0 CFast reader, I got offload rates of about ~390-400 MB/s to the SSD. A separate simultaneous transfer to the external HDDs reached 100-110 MB/s, the usual for external drives. For a 128 GB card, I found it was 20 min to the SSD and 45 minutes total to two HDDs.

A note to anyone using YoYotta V3 #109, as of October 2019 it didn't support BRAW that I saw. So while it offloaded the files fine, it didn't gather much metadata about them like duration or any thumbnails for reports.

(I'm not actually sure how many of us are using this program though to be honest, given the target markets for both the URSA and [YoYotta](https://yoyotta.com/) are quite different, and that YoYotta is kind of obscure.)

Generating proxies on my field MBP 13" inside Resolve netted render speeds of 15 FPS which isn't ideal but fine if I'm leaving the machine unattended and setups throughout the day permitted time to do so.

Back on my workstation at home (i9-9900K @ 4.7 GHz OC, RTX 2070), I was able to render them at 55 FPS which was fantastic.

The proxies were DNxHR LB with BMD Video v3 burnt in. One huge downside of using the Windows platform to produce dailies/proxies is that Resolve won't render you anything in ProRes by itself: it's simply excluded from the options list as Blackmagic don't have a license for their Windows variant of the program to permit encoding. DNxHR LB is the next best thing.

But it's not really that great either because Mac users that try to Quick Preview those proxies won't be able to view them, and sometimes even VLC will throw an error opening DNxHR files if the machine in question doesn't have the correct Avid codecs installed. But Premiere of course will read them which is the important thing as proxies.

On set, I found the outdoor locations a bit of a challenge - we encountered quite a bit of wind, dust and leaves that would blow past all of our faces and directly into my data kit as well.

Thankfully nothing was damaged and there was no consistent layer of dust, just loose leaves in places. Nothing that an anti-static brush and compressed air on my MBP keyboard couldn't solve. ([For now.](https://support.apple.com/en-au/keyboard-service-program-for-mac-notebooks))

And to wrap up the discussion about set, a partial crew photo!

{% include blogGalleryLightbox name="20191108_(photo_20191008)-tawaf-dit-2575.jpg" %}
Back: Kaan Cansiz, me, Molly Sutherland, Steven Chen.<br>Front: Trudi Gultom, Stephanie Todd, Leslie Phanekham. (Photo: Karen Hà)
{:.caption}


### Post

The post workflow is still kind of ongoing but at this stage the editor is working with 1080p DNxHR LB proxies and focusing on arranging story.

Then following that, speed ramps, crop-ins and a variety of other effects are planned.

It'll be interesting to see whether those will be later:
* preserved in the Premiere timeline and apply actively to new graded clips that are relinked 'over the top' of the old proxy clips; or
* recreated in Resolve, linked to the original camera negative and allowing for dynamic changes to the grade without the back & forth.

I'm hesitant to jump in and deal with both the plugins released now by both Blackmagic and the 'native support' offered by Adobe. Reportedly the experience is still marred by incompatibility (only CC 2019 and above), slow performance and in some cases incorrect start timecode. See [Autokroma's description of issues](https://autokroma.com/blog/BlackmagicRaw-Plugin-BRAW-Studio-Difference/) and their plugin 'BRAW Studio' as an alternative.

That being said, BRAW behaves fantastically inside Resolve (16.1 on Windows 10). Even when the material is stored on a low-speed external HDD, I was able to get 25 FPS playback. Although I have typically been accessing the material from this shoot from two internal HDDs in RAID0 (with a read speed of about 180 MB/s).


**Unanswered questions**

There's other components of post-production pipelines for music video and film that aren't touched upon here.

* What's the workflow for VFX artists? Will BRAW be supported natively inside After Effects, Nuke, or other compositing applications?
* What support exists for online & conform outside of just DaVinci Resolve, and instead inside Flame, Assimilate Scratch or Mistika Boutique?
* Or for either of these purposes, will uncompressed intermediate formats simply become a necessity when working with BRAW? Such as DPX or OpenEXR sequences.

Even among lower-end video projects like weddings and low-budget music videos, the demands for VFX are going to be small, but those users are still likely to find themselves encumbered by the lack of support of BRAW outside of the immediate circle of DaVinci Resolve and select versions of Adobe products. So, if you count yourself as a user with rapid turnarounds and still a need for VFX or similar, you'll need to look for solutions within Resolve.

### BRAW material in Resolve

When using the URSA Mini & Pocket to produce BRAW clips with BMD Video, they will by default appear in Resolve with BMD Video.

This could make you think *Ahhhh, why do my RAW clips look so crunchy and not log -- Did I accidentally burn in this video look?*

The clips are still and were always RAW. But instead they are presented to you with the BMD Video color gamma applied, as it expects this is what you want to see. Given you spent all day on set monitoring in that space, it's trying to be helpful.

Technically, the camera has registered the 3D LUT you nominate in Settings as a metadata flag. ([Blackmagic describes that](https://www.blackmagicdesign.com/products/blackmagicursaminipro/blackmagicraw) the 3D LUT travels with the .braw OCN file itself, presumedly being stored inside.)

So to return your image to a Log curve which you can use to grade in the traditional log convention, adjust the Camera RAW settings in Resolve like below picture.

{% include blogGalleryLightbox name="20191108-tawaf-dit-bmd-film-v-video.png" %}
Bottom-left corner: Adjust the 'Gamma' option to 'Blackmagic Design Film' instead of 'Video' to interpret the clip as Log. Split-screen image shown to illustrate the visual difference.
{:.caption}

Alternatively, you may wish to apply this on a whole-project basis to all clips. Do this in Project Settings > Camera RAW > Decode Using... 'Project' and then nominate the Gamma in the dropdown.

Just like R3D Redcode and other RAW formats, RAW sensor data is always preserved and can simply be interpreted by your colour application to create a variety of different outputs. There's no one exclusive way to interpret it.

This is unlike RGB ProRes video clips which have already interpreted that sensor data and present it to you as either log or a curve imitating Rec.709.

While you have Project Settings open, also consider dropping the preview resolution to Half or Quarter Res, to improve performance.

{% include blogGalleryLightbox name="20191108-tawaf-dit-resolve-res-size.png" %}

You can force renders to full resolution in spite of this choice here in the Deliver panel, under Video > Advanced Settings > "Force debayer to highest quality".

### Conclusions

BRAW is really just another proprietary camera format, which is to say, it lives and dies by its third-party software support and how far that can reach.

On set, the sensor is the same regardless of capture format. So the usual remarks about Blackmagic sensors apply. They don't hold up super well in low light, but they do perform remarkably better than their competitors' models at the same price point.

BRAW capture isn't inherently better, but at least it (a) prevents further compression from the ProRes codec, (b) gives you options to change white balance and exposure, and (c) uses up far less data than ProRes. This makes it a fantastic choice from a cinematographer's perspective.

From the perspective of post-production however, it's not the easiest choice. Current support for BRAW makes working with BRAW OCN material a complex process. An offline editing workflow is still required in almost all cases. Developers appear to be moving in the right direction, however.

It'll be interesting to see how the rest of post on *Tawaf* plays out, although I expect it to be pretty smooth at this point, considering how well BRAW material works inside Resolve.

<div class="callout-info">
<p><strong>Conclusions</strong></p>
<ul style="padding-left:1rem;">
<li>If you are cutting BRAW, <strong>cut with proxies</strong>: transcode the material to 1080p ProRes or DNxHR, then cut in any NLE.</li>
<li>If you want to cut with OCN material directly, do so only in DaVinci Resolve.</li>
<li>When you finally online/conform your edit from a different NLE, do so in DaVinci Resolve only. (Post houses that pay for Assimilate Scratch, continue to do as you please.)</li>
<li>Don't use unconventional recording media like SATA or USB-C SSDs without performing testing first.</li>
</ul>
</div>  
<br />
{% include blogGalleryLightbox name="20191108-tawaf-director-kaan-cansiz-dop-trudi-gultom-2.jpg" %}
{% include blogGalleryLightbox name="20191108-tawaf-director-kaan-cansiz-dop-trudi-gultom-1.jpg" %}
{% include blogGalleryLightbox name="20191108-tawaf-dit-example-still-younger-brother-2.jpg" %}
{% include blogGalleryLightbox name="20191108-tawaf-dit-example-still-dancing.jpg" %}
{% include blogGalleryLightbox name="20191108-tawaf-director-kaan-cansiz-dop-trudi-gultom-4.jpg" %}
