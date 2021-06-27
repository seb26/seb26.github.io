---
title:          "Offloading CFast cards to a super-fast M.2 NVME RAID unit over Thunderbolt 3"
slug:           offloading-cfast-cards-to-a-super-fast-m2-nvme-raid-unit-over-thunderbolt-3
date:           20210123T13:00:00+11:00
dateModified:   20210123T13:00:00+11:00
description:    |
  description

classes:        "blog-workflow nav-static"
categories:     workflow data data_wrangling
location:       Sydney
country:        Australia

blogGalleryLightbox:
  directoryPrefix:    "/post/img/"

thumbnail:
  url:    "/post/img/202101_nvme_cfast_raid_sebastian_reategui__still-0952.jpg"
  name:   "202101_nvme_cfast_raid_sebastian_reategui__still-0952"


---

M.2 NVME SSD devices offer about the fastest transfer speeds among all other products readily available in the consumer market today.

I recently picked up an [**OWC Express 4M2**](https://www.owcdigital.com/products/express-4m2), which is a Thunderbolt 3 RAID enclosure for M.2 NVME SSDs.

According to OWC's product page, when four M.2 NVME drives are placed inside in a RAID array, it can achieve up to 2,800 MB/s transfer speed.

This is an exceedingly generous amount of bandwidth compared to offerings in spinning-disk or SATA SSD offerings, which can reach between about 600 to 1,000 MB/s in RAID.

I can therefore envision the unit as being a target destination for **multiple camera memory cards**, **simultaneously**.

**Units**
<br />Given the frequent interchange of bytes and bits as measurements throughout this article, all units for data/speed measurements will from now on be indicated in *giga-* to 3 decimal places and not *mega-*, and with byte and bit spelled out. e.g.: `500 MB/second` = `0.500 Gbyte/s`.
<br /><br />
(The formatting that I usually prefer is `GB/s` and `Gbps` with upper & lowercase `b`. But to avoid *that* slice of wonderful confusion I have chosen to also spell out bytes and bits.)
{: .callout-info .small}

**Contents**
* TOC
{:toc}


### Why Thunderbolt 3?

In the DIT/data management world, macOS is virtually mandatory at least for offload operations because it is required by software & hardware at many stages. Codex card readers & software are exclusively macOS, as are Silverstack & YoYotta offloading programs. This means at least one host machine needs to be macOS natively and hence the hardware falls that way.

This means we need to look at options that can work within the Thunderbolt 3 ecosystem of independent 'box' or 'dock'-type devices connected by external cables. These are much more readily accessible than PCIe expansion, even though the latter is available (expensively) within the Mac Pro platform. These same M.2 NVME SSD units could be used on a PCIe RAID card on a Mac Pro and otherwise achieve **somewhere in the vicinity of 6 and 10 Gbyte/s** depending on the RAID card.

On the outset, you might be thinking: when RAID-0'd together, why is it that  four M.2 NVME drives are permitted to only transfer at a cumulative 2.8 Gbyte/s only, when individually a Samsung 970 EVO Plus unit would be capable of putting out 2.5 Gbyte/s by itself?

The quick answer is that PCIe when delivered over Thunderbolt 3 is only afforded approximately 2.8 Gbyte/s (or ~22.4 Gbit/s). A more detailed explanation [is covered at the end](#considerations).

Yes, 6 Gbyte/s is enormously fast and 2.8 Gbyte/s pales as watered down in comparison, but it may be **a necessary tradeoff to maintain connectivity** within the Thunderbolt & portable Mac world, and keeping costs down.

{% include blogGalleryLightbox name="202101_nvme_cfast_raid_sebastian_reategui__still-0892.jpg" %}
The OWC Express 4M2.
{: .caption}

### Why M.2 NVME drives?

M.2 NVME SSDs are not cheap. The 1TB 970 EVO Plus unit from Samsung used in my tests was AUD $259.00 at the time of purchase (December 2020). It has since come down about $10 at the time of writing this post.

To compare it against other media:

| Type | Brand | Unit | Price (AUD) | $/TB
|---|---|---|---:|---:|
| M.2 NVME | Samsung | 1TB 970 EVO Plus | $249.00 | $249/TB
| M.2 NVME | Samsung | 2TB 970 EVO Plus | $499.00 | $249.50/TB
| SATA SSD | Samsung | 1TB 860 EVO | $175.00 | $175/TB
| SATA HDD | WD | 10TB RED EFAX | $445.00 | $44.50/TB
{: .table .small}
*Prices are in AUD, were taken from a single vendor (not specified) and were current as of 16/01/2021.*
{: .caption}

It's easy to see how quickly M.2 NVME SSDs would become impractical for larger, mass-storage volumes.

The spinning-disk drive example in this table is approximately 18% of the $/TB cost.

But the benefits provided by M.2 NVME drives are the plentiful read & write speeds that they can offer within RAID.

{% include blogGalleryLightbox name="202101_nvme_cfast_raid_sebastian_reategui__still-0977.jpg" %}
4x Samsung 970 EVO Plus 1TB blades installed inside the OWC 4M2.
{: .caption}


### On paper

I'm imagining a 4 TB **super-fast storage device** where multiple camera cards can be dumped at full speed, simultaneously.

If the OWC 4M2 can offer 2.8 Gbyte/s (22.4 Gbit/s) as a ceiling, **how many camera cards** could be offloaded at their full speed within that bandwidth?

Assuming that:
- a separate TB3 bus is used for both the source media, and the OWC 4M2;
- the sky's the limit on CPU or RAM with regard to a performance bottleneck on the host machine;

How many full speed card reads can we fit within the bandwidth?

| Media type | Interface | Max read speed (Gbyte/s) | # of simultaneous reads within bandwidth
|---|---|---:|---:|
| ***Bandwidth available*** | | 2.800 |
| Sony AXSM | USB 3.0<br>(5 Gbit/s; 0.625 Gbyte/s) | ~0.235 | 11 (2 at interface limit)
| CFast 2.0 | USB 3.2<br>(10 Gbit/s; 1.250 Gbyte/s) | ~0.550 | 5 (2 at interface limit)
| Codex Compact Drive | USB 3.2<br>(8 Gbit/s; 1.000 Gbyte/s) | 1.000 | 2 (2 at interface limit)
| Codex Capture Dock | TB3<br>(22.4 Gbit/s; 2.800 Gbyte/s) | 2.500 | 1 (1 at interface limit)
{: .table .small}

The table suggests we should be able to read 11 Sony Venice AXSM cards simultaneously and write them to the OWC 4M2 within the bandwidth provided by that drive. This is definitely a bit pie-in-the-sky, because we could really only fit 2 AXS-CR1 readers per USB 3.0 bus (`2 * 0.235 Gbyte/s = 3.760 Gbit/s < 5.000 Gbit/s interface limit`). Although I'd love to push this more to say 3 or 4 readers, it would come down to host system design and availability of USB buses as to whether they would be supported at full speed. Not to mention the availability of having 11x expensive Sony readers at one's disposal.

The suggestion of 5x CFast 2.0 cards is a much more achievable goal to try and reach. The cards themselves can only be read at a certain speed: 0.550 Gbyte/s is usually what is available on the fastest CFast 2.0 cards on the market. The USB 3.2 bus is rated for 10 Gbit/s or 1.25 Gbyte/s, so we could fit about 2 full-speed reads or 3 slightly-less-than-full reads. If a machine could then  establish just two USB 3.2 buses, it may even be possible to net 4x simultaneous CFast 2.0 reads.

So, let's begin testing!

### Hypothesis

How many CFast 2.0 cards can be read simultaneously and written to the OWC 4M2 at their full speed?

My numbers suggest **five** (5) of them.

At the time of writing, I had access to only two CFast 2.0 readers and two media cards filled with content.

So straight away I'm not able to confirm with certainty if the goal can be achieved, but we should be able to see from the numbers if there is room for another two or three more additional simultaneous reads.

I would love to be able to test with more readers and when I do so, I'll update this article.

### Hardware & system used

| Storage device |
|---|---|
| Storage device | OWC Express 4M2
| RAID config | RAID 0 (SoftRaid XT)
| Drives | 4x Samsung 970 EVO Plus 1TB
| Capacity |  4.00 TB
| Filesystem | Mac OS Extended (Journaled)
| Connection | TB3 Bus 0 (port 1) with OWC TB3 to TB3 cable
{: .table .small}

| Host |
|---|---|
| Machine | MacBook Pro 13" 2018 (`MacBookPro15,2`)
| Specs | i5 2.3 GHz, 16 GB 2133 MHz DDR3, 512 GB SSD, 2 x TB3 Bus
| I/O | 4 x TB3 Ports; 2 x TB3 Bus
| OS | macOS 10.14.6
{: .table .small}

### Baseline read/write performance

First, to share some unit test results to establish a baseline.

| # | Test | Max Write<br>(Gbyte/s) | Max Read<br>(Gbyte/s)
|---|---|---:|---:|
| 1 | AJA System Test<br />Single File 4GB, 16bit RGB | 1.824 | 2.350
| 2 | ATTO Disk Benchmark<br />Snapshot 4GiB IO 64 MiB, Various I/O | 2.068 | 2.625
| 3 | ATTO Disk Benchmark<br />Continuous 4GiB IO 64 MiB for 5 Minutes Separately for R/W | 2.213 | 2.626
{: .table .small}

{% include blogGalleryLightbox name="202101_nvme_cfast_raid_sebastian_reategui__TestID_203_ATTO_Stats.png" %}
Test 1.
{: .caption}
{% include blogGalleryLightbox name="202101_nvme_cfast_raid_sebastian_reategui__TestID_203_ATTO_Graph.png" %}
Test 2.
{: .caption}
{% include blogGalleryLightbox name="202101_nvme_cfast_raid_sebastian_reategui__TestID_19_ATTO.png" %}
Graph showing disk activity during Test 3. The ATTO Disk Benchmark 5 minute test (read & write) commences before x = 11:33, and a subsequent 30 minute test (write) at x = 11:51. The sustained write performance over 30 minutes is incredible. Clearly no disk in the array fills its internal cache during the operation.
{: .caption}

AJA in Test 1 reported a write speed of 1.824 Gbyte/s, which is lower than various other speed tests I ran. Likely that choice of the simulated codec  ('16bit RGB') could lead to different results.

A sustained benchmark test for 5 minutes gave 2.213 Gbyte/s.

This is **lower** than the marketed 2.8 Gbyte/s marketed by OWC &ndash; approximately 21% slower &ndash; but when considering a whole heap of real world factors I'm not sure 2.8 was strictly achievable.

Approximately 2.2 Gbyte/s is consistent with at least [one other reviewer's results](https://9to5mac.com/2018/09/13/hands-on-owc-express-4m2-thunderbolt-3-enclosure-accommodates-four-m-2-ssd-8tb-video/#comment-4099647190) using the OWC 4M2 unit.

If we consider that now **2.2 Gbyte/s is our achievable write speed**, this will have an impact on my earlier predictions.

We could likely only fit **four CFast 2.0 cards** simultaneously read at full speed &ndash; read at 0.55 Gbyte/s (4.4 Gbit/s) and working within 2.2 Gbyte/s (17.6 Gbit/s) bandwidth.

### Testing media

A static scene was rolled on for approximately 5 minutes.

| | Test card 1: A023 | Test card 2: A024
|---|---|---|
| Storage media | Angelbird CFast 128GB | Angelbird CFast 128GB
| Used | 58.57 GB | 78.87 GB
| Clips | 1 | 1
| Duration | 00:04:53:08 (7,333 frames) | 00:06:35:00 (9,875 frames)
| Camera | Blackmagic URSA Mini Pro 4.6K
| Format | 4608 x 2592 ProRes 444 XQ
| Filesystem | Mac OS Extended
{: .table .small}

### Test 1

The first test offload was performed using YoYotta 3.0 (v166) on 12/12/2020.

The I/O configuration was straightforward: two Angelbird CFast readers directly into the MacBook Pro's port 3 & 4 on the right-hand side, using the included USB 3.2 USB-C to USB-C cable.

See the I/O configuration chart:

{% include blogGalleryLightbox name="202101_nvme_cfast_raid_sebastian_reategui__diagram1_offload.png" %}

Once mounted, I added both cards as separate jobs in YoYotta, set the destination to `/Volumes/OWC_Raid0` and begun both simultaneously.

The result:

| Test 1 | A023 | A024
|---|---|---|
| Copy | ~0.468 | ~0.468
| Verify | 1.900 | Not recorded
| Total time | Not recorded | Not recorded
| Cumulative TB/hour | 1.352 TB/hour | 1.820 TB/hour
{: .table .small}

Some holes in my data here on this test. At the time I was recording, I didn't have my screen recording running and had limited time with the cards & camera. This largely means my numbers are eyeballed averages. This is probably OK considering I am commenting in quite a hypothetical space here.

**Two CFast cards at 0.468 Gbyte/s** is how much was achieved for the YoYotta copy, for a simultaneous read speed of 0.936 Gbyte/s. Individually, this rate is shy of the 0.550 Gbyte/s I was expecting, which is approximately the maximum rated read speed for a CFast 2.0 Card. The simultaneous read speed indicates ~43% saturation of the OWC 4M2's 2.2 Gbyte/s bandwidth: there was still plenty of bandwidth to be consumed during the YoYotta copy.

For the YoYotta verify, the **read speed** of the data *after* offloading was a great result: reading from the files stored on the OWC 4M2 was performed at **1.900 Gbyte/s**, at least for one of the two jobs. I did not catch the simultaneous read speed for both jobs while verifying.

It's hard to explain why the two readers were not hitting 0.550. The 'hit' must have been at the readers or some other device(s) on the bus. 0.936 Gbyte/s simultaneous would have been 7.488 Gbit/s which is shy of the 10 Gbit/s ceiling provided by USB 3.2. It could also be explained by host machine performance  (YoYotta generates both MD5 and XXHash &ndash; contributing factor here?) or even heat. I didn't monitor these factors.


### Test 2

Same YoYotta software, same CFast media & readers, but different I/O configuration:

{% include blogGalleryLightbox name="202101_nvme_cfast_raid_sebastian_reategui__diagram2_offload.png" %}

Here I look to minimise the native TB3 ports being used, by routing both readers through a single TB3 dock (CalDigit TS3 Plus). This is to mimick a real world scenario where the user needs the remaining TB3 ports for other hardware.

One reader uses the 10 Gbit/s USB-C port and the other using the 5 Gbit/s USB-C port on the front. We might immediately expect that the 5 Gbit/s-connected reader will perform worse.

{% include blogGalleryLightbox name="202101_nvme_cfast_raid_sebastian_reategui__still-0952.jpg" %}
Creating clean, dust-free product photography is much harder than it actually seems.
{: .caption}

The result:

| Test 2 | A023 | A024
|---|---|---|
| Copy (Gbyte/s) | ~0.530 | ~0.350
| Verify (Gbyte/s) | 1.300 | 1.100
| Total time | Not recorded | Not recorded
| Cumulative TB/hour | |
| Port | 10 Gbit/s | 5 Gbit/s
{: .table .small}

Indeed, we get **one CFast card at 0.530 Gbyte/s and the other card at 0.350 Gbyte/s**, for a combined simultaneous read speed of **0.880 Gbyte/s** which saturates the target device `OWC_Raid0` at about 40%.

As expected, the 5 Gbit/s-connected reader performs worse, assumedly because the OS is not permitting it to saturate the USB 3.0 bus entirely.

But the total transfer speed of two cards does balance out somewhat, as it is **only 5% slower** than the total transfer speed of two cards on Test 1 (0.880 Gbyte/s versus 0.936 Gbyte/s).

I suggest that there may be sufficient room to add another CalDigit and 2x readers on either this TB3 Bus (Bus 1), or on TB3 Bus 0 with the OWC 4M2. That is, if the OS permits those two readers to occupy a separate USB 3.1 or 3.2 bus, or if it adds them to an existing USB bus combined with the first 2 readers, forcing all of them to share the same approximate bandwidth of ~0.9 Gbyte/s. If the case is the latter, we may see simultaneous transfer speeds of 0.225 Gbyte/s instead.

### Considerations

**Thunderbolt 3 bus specification**

[According to OWC](https://www.amazon.com/ask/questions/Tx1ZAW96405XD1F/ref=ask_ql_ql_al_hza), the OWC Express 4M2 can only feed a single PCIe lane to each drive inside the RAID group, affording them approximately 0.700 Gbyte/s each. PCIe traffic is structured within the Thunderbolt 3 protocol ([1](https://thunderbolttechnology.net/sites/default/files/Thunderbolt3_TechBrief_FINAL.pdf), [2](https://eshop.macsales.com/blog/68484-thunderbolt-on-the-m1-mac-mini/#comment-172924)) such that displays are allocated a certain amount of bandwidth (between 17 and 25 Gbit/s) and PCIe is afforded the difference up to a maximum of ~22 Gbit/s. Even in a scenario in which no displays are present at all on the chain, PCIe is restricted.

So in discussions regarding Thunderbolt 3, perhaps the available bandwidth for data transfers should be referred to as 22 Gbit/s, not 40 Gbit/s for data. This actually exposes a very common trope in hard drive & SSD marketing copy in the last few years, where on a bar graph, an overpoweringly tall column for Thunderbolt 3's 40 Gbit/s speed is shown to be enormous compared to the speed of Thunderbolt 2, USB 3.2, 3.0 and 2.0, etc. Talk about fact checked. (See also [more reasons why most hard drive & SSD marketing is misleading](https://filmdrives.com/blogs/blog/will-thunderbolt-make-my-drives-faster).)

In a normal scenario where my source media is USB-based and the target drive also USB-based, it would be my standing operating procedure to **not place both the readers and target drive on the same 'bus'** to prevent bandwidth being squeezed down a single pipe. In the process of researching this article, however, I'm discovering more about how buses are routed and the manner in which bandwidth is allocated by the TB3 protocol. On a dual TB3 bus machine, where each bus provides 22 Gbit/s for PCIe and 10 Gbit/s for USB 3.2, it may even be a grand idea to distribute readers & RAID accordingly:

| Bus | PCIe (22 Gbit/s) | USB 3.2 (10 Gbit/s) | Total Used
|---|---|---|---:|
| TB3 Bus 0 | OWC 4M2 | Readers 1 & 2 | 32 Gbit/s
| TB3 Bus 1 | | Readers 3 & 4 | 10 Gbit/s
{: .table .small}

**Data workflow**

On heavy data jobs, this 4 TB unit is not likely to provide more than 1-2 days capacity. I can envision it being used as an temporary ultra-fast dumping ground to move data ASAP. A larger mass-storage device (NAS or DAS) is still going to be needed in tandem with this device if you are storing cumulatively store shoot days, which of course you will be.

If a single shoot day is generating between 1.5 and 3.0 TB, using this device with a 4 TB capacity could easily present trouble if the turnaround time for post-production to archive is longer. Having 8 TB capacity would mitigate this, and at time of writing in AUD a 2TB Samsung 970 EVO Plus was approximately the same $/TB anyway.

**Disk operations**

Both reading AND writing to a storage device simultaneously is a combination of operations that typically hampers the performance of any storage device. HDDs perform quite poorly when attempting to read & write, the effective transfer rate is lowered quite a bit in these moments.

Even though I described simultaneous card offloads above, the operations for the pair of 2 cards are typically write-write then read-read, and so not usually read-write. Especially when the cards are matched in size (which in most cases they are closely matched because ACs are trying to fill them up close to the brim), i.e. two 256 GB-capacity camera mags that are 210 and 220 GB in size will both begin and finish their copy at more or less the same time, and the same for their verify.

What is not explored in this analysis however is the impact that performing an offload copy parallel to an offload verify, a.k.a where the OWC 4M2 is having data written from one source and is expected to also feed out existing data as a verify operation for another source (2 jobs that did not start at similar times), or to a transcoding program or playback.


### Methodology

It is imperative on the next test that I run screen recordings so I can be more precise about the start and end time of jobs, particularly given that I am running simultaneous jobs.

I will also copy-paste YoYotta's log file contents periodically, as it logs the final copy & verify individual average at the end of the job. Arguably I should also be monitoring disk activity in iStat Menus to confirm YY's reported rates are consistent with actual host machine activity.

I'd like to also gather system sensor values (CPU %, RAM usage, and temperature) throughout as well. I'd love a way to export this data from iStat Menus but there is no such feature (*dear developers if you're reading, please implement this*).

I will also be putting Silverstack & Offload Manager to the test to offer an insight into multiple card performance across different apps.

### Conclusion

Big thanks to Andy Diep for providing the CFast cards & camera for the test.
