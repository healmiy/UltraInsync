---
excalidraw-plugin: parsed
tags:
cssclasses:
  - cornell-border
  - cornell-livepreview
  - cornell-left
  - wide-page
XRM: true
Status: 🌘
Recurring: false
Date-created: 2025-06-25
aliases:
---
>[!summary]
>![[UltraInSync.svg]]


<div style="page-break-after: always;"></div>

# Sync-ing up repo

Some notes [^25-09-01]

<p class="hide">source:</p>

[^25-09-01]: Date entry placeholder


Some notes [^25-09-01]

<p class="hide">source:</p>

[^25-09-01]: Date entry placeholder


> [!important]- Git: Commit and Sync
> the command to push new entries

1. Make a repository github.com/new
	- Make sure to add a README. Saves some extra steps with committing stuff to the repo
2. Get a GHP key.
	- You can do so by navigating to your profile - Settings - Developer Settings - Personal access tokens - Tokens (classic) - Generate new token - Generate new token (Classic)
	- Set your expiration to "No expiration" if you don't wanna have to worry about renewing it.
	- Set the scope to "repo"
	- Click generate, and copy the token.
3. Get the Git plugin by Vinzent
	- Enable the plugin
4. Press Control/Command + P and run "Git: Clone an existing remote repo"
	- Clone the repo in Obsidian with the following template:
	- (No space) https:// GHP_TOKENHERE@github.com/USERNAME/REPO.git
	- Enter a directory for cloning the repo. The directory will be used as your repo directory
	- Specify your depth. For 99.9% of people, leave this blank and press enter.
5. Git is now set up. Now all you need to do is restart Obsidian[^25-06-25]

<p class="hide">source:</p>

[^25-06-25]: [How to Use Obsidian Git to Sync Your Notes](https://www.youtube.com/watch?v=ImrLbomFYA0)

## Serve website locally before pushing to repo
> [!hint|float-right]- Don't Forget to Git Fetch 1st
> in obsidian _after sync-ing fork_ on Github

type `npx quartz build --serve` in VS code terminal [^25-07-04]

<p class="hide">source:</p>

[^25-07-04]: https://quartz.jzhao.xyz/build

# create alias from existing text

1. highlight the text you want to create alias ''PIC UKM - ==Mior== Aiman''
2.  "ALT + a" at ==Mior== and find the note you'd want to alias-ed[^25-06-25-alias] 
> [!caution|float-right]
> Shortkey in no.2 will also auto create the page!

   ![[find the notes from autocomplete.png]]

<p class="hide">source:</p>

[^25-06-25-alias]: [add alias for existing link ](https://github.com/pvojtechovsky/obsidian-link-with-alias?tab=readme-ov-file#add-alias-for-existing-link)


# Core Settings

`/.*\.(png|jpg|svg|pdf|mp4|gif|opus|json|js|ts|gitattributes|gitignore|prettierrc|Dockerfile)/`[^25-06-26]

<p class="hide">source:</p>

[^25-06-26]: [[excluded-file-extentions.png]]

# Website Setup
![[README#Forked updates]]





<div style="page-break-after: always;"></div>


# Override NextDNS nameserver injection in Tailscale
![[Pasted Image 20250903200244_573.png]]
- windows/app on mobile = preferences
- linux = `tailscale set --accept-dns=false` [^25-09-03]

<p class="hide">source:</p>

[^25-09-03]: https://tailscale.com/kb/1072/client-preferences?tab=linux#use-tailscale-dns-settings



# install .deb file on Linux, easier to manage than to install using tar.gz
1. wget https://github.com/syncthing/syncthing/releases/download/v2.0.4/syncthing_2.0.4_amd64.deb
2. `sudo dpkg -i syncthing_2.0.4_amd64.deb`
3. `sudo apt-get -f install`
4. `syncthing --version`
5. `sudo systemctl restart syncthing@.service`
	1. check service status = `systemctl status syncthing@.service`
	2. `systemctl --user enable syncthing.service`
	3. `systemctl --user start syncthing.service`
![[Pasted image 20250903202645.png]]
```# syncthing@.service
[Unit]
Description=Syncthing - Open Source Continuous File Synchronization for %I
Documentation=man:syncthing(1)
After=network.target
StartLimitIntervalSec=60
StartLimitBurst=4

[Service]
User=%i
ExecStart=/usr/bin/syncthing serve --no-browser --no-restart
Restart=on-failure
RestartSec=1
SuccessExitStatus=3 4
RestartForceExitStatus=3 4

# Hardening
ProtectSystem=full
PrivateTmp=true
SystemCallArchitectures=native
MemoryDenyWriteExecute=true
NoNewPrivileges=true

# Elevated permissions to sync ownership (disabled by default),
# see https://docs.syncthing.net/advanced/folder-sync-ownership
#AmbientCapabilities=CAP_CHOWN CAP_FOWNER

[Install]
WantedBy=multi-user.target
```
https://github.com/syncthing/syncthing/blob/main/etc/linux-systemd/system/syncthing%40.service


# Cloudflared commands
1. update package `sudo apt-get update && sudo apt-get install --only-upgrade cloudflared`
	1. or via _dpkg -i_  = `curl --location --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb && sudo dpkg -i cloudflared.deb`
2. restart service = `sudo systemctl restart cloudflared.service`
# Excalidraw Data

## Text Elements
⁂ Version controlling documentations ^2npIbPdp

Plugins ^5DZZHfxN

Excalidraw ^qZVc24YD

Templater ^pePblqzM

Style Settings ^7lDv9n3Q

Git ^oHaFFi71

Git for Windows ^VGmgySga

Omnisearch ^ojaxglep

install 1st! ^4VsXpo93

Projects ^hxkrjkCe

might switch to Bases (new Core plugin) ^LTqfdcHg

Calendar ^MWFgxSPL

Google ^az99Pwex

Eisenhower Matrix ^SeWw2zVJ

[[task kanban]] ^zspshMx0

QOL plugins ^xkobL26j

Link with Alias ^mOxShkN3

Smart Typography ^kQoJgzld

Copy to Block ^ObOixo7c

e.g. auto convert to 1/3 to ⅓ ^AHMWSXIi

right click on text will auto create block id "^o2m1mv" 
(easy referencing) ^dWR19DM2

website ^yb305I5g

build with Quartz (MWM) ^v5SQUf4Z

Obsidian ^QRixaxbw

Core ^EPKA6HmL

PDF++ ^IBbRRZio

UltraInSync ^Lp74GBvh

infinite whiteboarding ^zNhtnVpz

⁂ get every members on the same page ^ER1K9zKr

[[Cornell Note taking style]] ^vyVu3gB0

Image Caption ^99FSGnOV

by adding "|" after the image name ^WvPfbgVO

ThinkPad Server ^5Zz0cqIc

ExternalSSD ^Gikmlb3L

Obsidian Web ^I8lv0VY4

https://kb.adsvise.llc/ ^VLp7qHQZ

aka localhost:3000 ^s1Yp47oS

ssh.11@abe4r r ^6puGR6kW

/config/Desktop/PKMxKB ^mOwWBvJD

stores presistant data under ^Hm43ajch

tailscale serve --https=443 localhost:3000 ^qhNs2vq1

via CF Access ^HMZT9sL1

Surface Server ^MJJAFUVG

ssh.12@abear R ^UdaPxmmp

Syncthing ^l79FqDcy

iPad Air ^dwrG0elH

iPad Air ^si4AF6S1

NextDNS ^XsuitAUy

block ads on iPad ^0hbvZJib

Cloudflared ^DTs2hPxh

100.108.51.108 ^9ycYkY2u

100.73.8.3 ^QaMSIVRm

100.107.229.104 ^MB7lHRZX

Elitebook ^Vnrikmxm

Not .md notes ^DJNh2Rg5

md notes with no tags ^tw7bk7z6

md notes with tags ^BniK8pNL

tse ^swq9jXiK

tes ^zVXbck4k

## Element Links
zboQRAfD: [[UltraInSync#Sync-ing up repo]]

WHLBiNwF: [[BiB.md]]

NuwUMPF6: [[UltraInSync#create alias from existing text]]

jR8J5lxY: [[content/UltraInSync.md#Core Settings]]

vcNOIeht: [[content/UltraInSync.md#Website Setup]]

jVdDHGlM: [[content/UltraInSync.md#Override NextDNS nameserver injection in Tailscale]]

LaxPLwvt: [[content/UltraInSync.md#install .deb file on Linux, easier to manage than to install using tar.gz]]

8CqUFf1K: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/configure-tunnels/cloudflared-parameters/origin-parameters/#httphostheader

p9MEnMuw: [[content/UltraInSync.md#Cloudflared commands]]

Hm43ajch: [[Pasted Image 20250903074952_148.png]]

qhNs2vq1: https://tailscale.com/kb/1242/tailscale-serve

## Embedded Files
385d2528eab9421b751cb5a01651bc7616c1f44b: [[Pasted Image 20250625183431_937.png]]

84cc6e222a1a6c9f365f5a3891ffda4441a47b0f: [[content/attachments/excluded-file-extentions.png]]

0927d85e455cd43b95ed162e4974c8488ca5b8cc: [[content/attachments/syncthing-download-mistake.png]]

e9da9edf97883b893ea5d62f7fd4e4a32eff3bfb: [[syncthing header localhost in CF.png]]

c403c03f9efa741b4ba7f7a6d6c1a12dc2e2eb28: [[Pasted Image 20250906010229_022.png]]

%%
## Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.15.1",
	"elements": [
		{
			"id": "Wm9HrpwzNqcy7i9k-AvmQ",
			"type": "image",
			"x": 967.7845667594615,
			"y": -977.000258099527,
			"width": 657.8451260723833,
			"height": 649.3750171529964,
			"angle": 0,
			"strokeColor": "transparent",
			"backgroundColor": "#ffffff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "a0",
			"roundness": null,
			"seed": 1421484485,
			"version": 268,
			"versionNonce": 420211973,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757091776664,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "c403c03f9efa741b4ba7f7a6d6c1a12dc2e2eb28",
			"scale": [
				1,
				1
			],
			"crop": null
		},
		{
			"id": "gaDcKV4jG1VFjDJcO6IpK",
			"type": "rectangle",
			"x": -100,
			"y": 0,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "a2",
			"roundness": {
				"type": 3
			},
			"seed": 1966288522,
			"version": 70,
			"versionNonce": 1291287017,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "5DZZHfxN",
					"type": "text"
				},
				{
					"id": "9rJVNMIqLnVqIsKMYNuVj",
					"type": "arrow"
				},
				{
					"id": "c6t46eZaogmVsaCLARqYP",
					"type": "arrow"
				},
				{
					"id": "eLV-3iB4o7aspKhKPf-a_",
					"type": "arrow"
				},
				{
					"id": "PrH2WI7gpNdgZBGShPlbJ",
					"type": "arrow"
				},
				{
					"id": "_G8iV1xtRGbGfiqnzNPi1",
					"type": "arrow"
				},
				{
					"id": "JXei54iI_izd3u6BOmcA9",
					"type": "arrow"
				},
				{
					"id": "uQaROpA3WS5a8DJGG120g",
					"type": "arrow"
				},
				{
					"id": "H8j2CmMtHPSxt1-_86ygy",
					"type": "arrow"
				},
				{
					"id": "dtJvHj9AQuPDpYXkmDrBW",
					"type": "arrow"
				},
				{
					"id": "kvm6irecp67sqluW0KLPq",
					"type": "arrow"
				}
			],
			"updated": 1750920472999,
			"link": null,
			"locked": false
		},
		{
			"id": "5DZZHfxN",
			"type": "text",
			"x": -30.799957275390625,
			"y": 40,
			"width": 61.59991455078125,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "a2V",
			"roundness": null,
			"seed": 1548873652,
			"version": 36,
			"versionNonce": 1055954855,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750920471090,
			"link": null,
			"locked": false,
			"text": "Plugins",
			"rawText": "Plugins",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "gaDcKV4jG1VFjDJcO6IpK",
			"originalText": "Plugins",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "t1gfJKie2soiTTKxBYDpM",
			"type": "rectangle",
			"x": -100,
			"y": -200,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "a2l",
			"roundness": {
				"type": 3
			},
			"seed": 565308611,
			"version": 66,
			"versionNonce": 147216201,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "QRixaxbw"
				},
				{
					"id": "H8j2CmMtHPSxt1-_86ygy",
					"type": "arrow"
				},
				{
					"id": "N3hkTejWn3pCwPIVjrd6i",
					"type": "arrow"
				},
				{
					"id": "dtJvHj9AQuPDpYXkmDrBW",
					"type": "arrow"
				}
			],
			"updated": 1750920458242,
			"link": null,
			"locked": false
		},
		{
			"id": "QRixaxbw",
			"type": "text",
			"x": -44,
			"y": -162.5,
			"width": 88,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "a3",
			"roundness": null,
			"seed": 1218964931,
			"version": 45,
			"versionNonce": 1444035175,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750920446356,
			"link": null,
			"locked": false,
			"text": "Obsidian",
			"rawText": "Obsidian",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "t1gfJKie2soiTTKxBYDpM",
			"originalText": "Obsidian",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "8DYRxyh1MNiE_q7SUeClr",
			"type": "rectangle",
			"x": -400,
			"y": 200,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": "lLW_hzXTBDUbcvAx1Oh7X",
			"index": "a6",
			"roundness": {
				"type": 3
			},
			"seed": 1092435596,
			"version": 13,
			"versionNonce": 262724455,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "qZVc24YD"
				},
				{
					"id": "9rJVNMIqLnVqIsKMYNuVj",
					"type": "arrow"
				}
			],
			"updated": 1750920444939,
			"link": null,
			"locked": false
		},
		{
			"id": "qZVc24YD",
			"type": "text",
			"x": -343.99993896484375,
			"y": 240,
			"width": 87.9998779296875,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": "lLW_hzXTBDUbcvAx1Oh7X",
			"index": "a6V",
			"roundness": null,
			"seed": 29565452,
			"version": 20,
			"versionNonce": 1208433932,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750811321635,
			"link": null,
			"locked": false,
			"text": "Excalidraw",
			"rawText": "Excalidraw",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "8DYRxyh1MNiE_q7SUeClr",
			"originalText": "Excalidraw",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "9rJVNMIqLnVqIsKMYNuVj",
			"type": "arrow",
			"x": -0.09999999999999432,
			"y": 105,
			"width": 300.0000000000001,
			"height": 90,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "a7",
			"roundness": null,
			"seed": 1497677876,
			"version": 141,
			"versionNonce": 21285647,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048582,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					45
				],
				[
					-300.0000000000001,
					45
				],
				[
					-300.0000000000001,
					90
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "gaDcKV4jG1VFjDJcO6IpK",
				"focus": -0.7058823529411764,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000006,
					1.05
				]
			},
			"endBinding": {
				"elementId": "8DYRxyh1MNiE_q7SUeClr",
				"focus": -1.12,
				"gap": 6,
				"fixedPoint": [
					0.4994999999999996,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "ngU9a27npXMned3ostC3Y",
			"type": "rectangle",
			"x": -100,
			"y": 200,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": "lLW_hzXTBDUbcvAx1Oh7X",
			"index": "a8",
			"roundness": {
				"type": 3
			},
			"seed": 174767284,
			"version": 13,
			"versionNonce": 1123577255,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "pePblqzM"
				},
				{
					"id": "c6t46eZaogmVsaCLARqYP",
					"type": "arrow"
				}
			],
			"updated": 1750920444939,
			"link": null,
			"locked": false
		},
		{
			"id": "pePblqzM",
			"type": "text",
			"x": -39.599945068359375,
			"y": 240,
			"width": 79.19989013671875,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": "lLW_hzXTBDUbcvAx1Oh7X",
			"index": "a8V",
			"roundness": null,
			"seed": 931369228,
			"version": 18,
			"versionNonce": 548649868,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750811321635,
			"link": null,
			"locked": false,
			"text": "Templater",
			"rawText": "Templater",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ngU9a27npXMned3ostC3Y",
			"originalText": "Templater",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "c6t46eZaogmVsaCLARqYP",
			"type": "arrow",
			"x": -0.09999999999999432,
			"y": 105,
			"width": 0,
			"height": 90,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "a9",
			"roundness": null,
			"seed": 875796620,
			"version": 142,
			"versionNonce": 1471582511,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048583,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					90
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "gaDcKV4jG1VFjDJcO6IpK",
				"focus": 0,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000006,
					1.05
				]
			},
			"endBinding": {
				"elementId": "ngU9a27npXMned3ostC3Y",
				"focus": 0.0006288601909038451,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000006,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "cbPWG2pdcUj1itf1zHTte",
			"type": "rectangle",
			"x": 200,
			"y": 200,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": "lLW_hzXTBDUbcvAx1Oh7X",
			"index": "aA",
			"roundness": {
				"type": 3
			},
			"seed": 1010521100,
			"version": 13,
			"versionNonce": 750284775,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "7lDv9n3Q"
				},
				{
					"id": "eLV-3iB4o7aspKhKPf-a_",
					"type": "arrow"
				}
			],
			"updated": 1750920444939,
			"link": null,
			"locked": false
		},
		{
			"id": "7lDv9n3Q",
			"type": "text",
			"x": 238.40008544921875,
			"y": 240,
			"width": 123.1998291015625,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": "lLW_hzXTBDUbcvAx1Oh7X",
			"index": "aAV",
			"roundness": null,
			"seed": 1139465868,
			"version": 24,
			"versionNonce": 1548511756,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750811321635,
			"link": null,
			"locked": false,
			"text": "Style Settings",
			"rawText": "Style Settings",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "cbPWG2pdcUj1itf1zHTte",
			"originalText": "Style Settings",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "eLV-3iB4o7aspKhKPf-a_",
			"type": "arrow",
			"x": -0.09999999999999432,
			"y": 105,
			"width": 299.9999999999999,
			"height": 90,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aB",
			"roundness": null,
			"seed": 920437428,
			"version": 141,
			"versionNonce": 608867151,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048583,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					45
				],
				[
					299.9999999999999,
					45
				],
				[
					299.9999999999999,
					90
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "gaDcKV4jG1VFjDJcO6IpK",
				"focus": 0.7058823529411764,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000006,
					1.05
				]
			},
			"endBinding": {
				"elementId": "cbPWG2pdcUj1itf1zHTte",
				"focus": 1.12,
				"gap": 6,
				"fixedPoint": [
					0.4994999999999996,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "Zebxt0ukMYo9Acj463QSJ",
			"type": "rectangle",
			"x": 500,
			"y": 200,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": "lLW_hzXTBDUbcvAx1Oh7X",
			"index": "aC",
			"roundness": {
				"type": 3
			},
			"seed": 179751180,
			"version": 14,
			"versionNonce": 2132840505,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "oHaFFi71"
				},
				{
					"id": "PrH2WI7gpNdgZBGShPlbJ",
					"type": "arrow"
				},
				{
					"id": "mncBYqZIPf1Yu5zAO_zCe",
					"type": "arrow"
				}
			],
			"updated": 1751641947127,
			"link": null,
			"locked": false
		},
		{
			"id": "oHaFFi71",
			"type": "text",
			"x": 586.8000183105469,
			"y": 240,
			"width": 26.39996337890625,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": "lLW_hzXTBDUbcvAx1Oh7X",
			"index": "aCV",
			"roundness": null,
			"seed": 1705988148,
			"version": 9,
			"versionNonce": 768297100,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750811321635,
			"link": null,
			"locked": false,
			"text": "Git",
			"rawText": "Git",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Zebxt0ukMYo9Acj463QSJ",
			"originalText": "Git",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "PrH2WI7gpNdgZBGShPlbJ",
			"type": "arrow",
			"x": -0.09999999999999432,
			"y": 105,
			"width": 600,
			"height": 90,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aD",
			"roundness": null,
			"seed": 935271860,
			"version": 141,
			"versionNonce": 1599689071,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048584,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					45
				],
				[
					600,
					45
				],
				[
					600,
					90
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "gaDcKV4jG1VFjDJcO6IpK",
				"focus": 0.8659793814432989,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000006,
					1.05
				]
			},
			"endBinding": {
				"elementId": "Zebxt0ukMYo9Acj463QSJ",
				"focus": 1.12,
				"gap": 6,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "lLW_hzXTBDUbcvAx1Oh7X",
			"type": "frame",
			"x": -480,
			"y": 168.68459858681763,
			"width": 1200,
			"height": 151.31540141318237,
			"angle": 0,
			"strokeColor": "#bbb",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aE",
			"roundness": null,
			"seed": 284374452,
			"version": 137,
			"versionNonce": 790508997,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757267635034,
			"link": null,
			"locked": false,
			"customData": {
				"frameColor": {
					"stroke": "#0D2D57",
					"fill": "#164F9A",
					"nameColor": "#3480E2"
				}
			},
			"name": "Frame 1 - Core, can't start sync-ing before setting all this up"
		},
		{
			"id": "N3hkTejWn3pCwPIVjrd6i",
			"type": "arrow",
			"x": 104.99999999999997,
			"y": -160,
			"width": 494.9,
			"height": 155,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aF",
			"roundness": null,
			"seed": 2114202292,
			"version": 937,
			"versionNonce": 350942159,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048585,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					40,
					0
				],
				[
					40,
					120
				],
				[
					494.9,
					120
				],
				[
					494.9,
					155
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "t1gfJKie2soiTTKxBYDpM",
				"focus": -0.2,
				"gap": 5,
				"fixedPoint": [
					1.025,
					0.4
				]
			},
			"endBinding": {
				"elementId": "iH6EVXAdTW7BKywEmwX3S",
				"focus": -0.0010000000000001848,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": [
				{
					"index": 3,
					"start": [
						40,
						120
					],
					"end": [
						494.9,
						120
					]
				}
			],
			"startIsSpecial": true,
			"endIsSpecial": false
		},
		{
			"id": "zboQRAfD",
			"type": "embeddable",
			"x": 640,
			"y": 260,
			"width": 100,
			"height": 100,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"roundness": null,
			"seed": 91198,
			"version": 198,
			"versionNonce": 1141739811,
			"updated": 1750920440668,
			"isDeleted": false,
			"groupIds": [],
			"boundElements": [],
			"link": "[[UltraInSync#Sync-ing up repo]]",
			"locked": false,
			"scale": [
				0.1,
				0.1
			],
			"customData": {
				"mdProps": {
					"useObsidianDefaults": false,
					"backgroundMatchCanvas": false,
					"backgroundMatchElement": false,
					"backgroundColor": "#edf2f8",
					"backgroundOpacity": 90,
					"borderMatchElement": true,
					"borderColor": "#fff",
					"borderOpacity": 100,
					"filenameVisible": true
				}
			},
			"index": "aJ",
			"frameId": "lLW_hzXTBDUbcvAx1Oh7X"
		},
		{
			"id": "0dB_C7_afSMyy0iPdEUGx",
			"type": "rectangle",
			"x": 800,
			"y": 200,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aK",
			"roundness": {
				"type": 3
			},
			"seed": 1520441667,
			"version": 98,
			"versionNonce": 1845696167,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "ojaxglep"
				},
				{
					"id": "_G8iV1xtRGbGfiqnzNPi1",
					"type": "arrow"
				}
			],
			"updated": 1750920444939,
			"link": null,
			"locked": false
		},
		{
			"id": "ojaxglep",
			"type": "text",
			"x": 856.0000610351562,
			"y": 240,
			"width": 87.9998779296875,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aKV",
			"roundness": null,
			"seed": 813399309,
			"version": 103,
			"versionNonce": 1128627373,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750816916569,
			"link": null,
			"locked": false,
			"text": "Omnisearch",
			"rawText": "Omnisearch",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "0dB_C7_afSMyy0iPdEUGx",
			"originalText": "Omnisearch",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "_G8iV1xtRGbGfiqnzNPi1",
			"type": "arrow",
			"x": -0.09999999999999432,
			"y": 105,
			"width": 900,
			"height": 90,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aL",
			"roundness": null,
			"seed": 838553709,
			"version": 348,
			"versionNonce": 1224278447,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048585,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					45
				],
				[
					900,
					45
				],
				[
					900,
					90
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "gaDcKV4jG1VFjDJcO6IpK",
				"focus": -0.8659793814432989,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000006,
					1.05
				]
			},
			"endBinding": {
				"elementId": "0dB_C7_afSMyy0iPdEUGx",
				"focus": -1.12,
				"gap": 6,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "iH6EVXAdTW7BKywEmwX3S",
			"type": "rectangle",
			"x": 500,
			"y": 0,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [
				"PHGA3AgPnj2rFrYOjZVdC"
			],
			"frameId": null,
			"index": "aM",
			"roundness": {
				"type": 3
			},
			"seed": 539061260,
			"version": 190,
			"versionNonce": 1133135545,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "VGmgySga"
				},
				{
					"id": "N3hkTejWn3pCwPIVjrd6i",
					"type": "arrow"
				},
				{
					"id": "mncBYqZIPf1Yu5zAO_zCe",
					"type": "arrow"
				}
			],
			"updated": 1751641943940,
			"link": null,
			"locked": false
		},
		{
			"id": "VGmgySga",
			"type": "text",
			"x": 534.0000915527344,
			"y": 40,
			"width": 131.99981689453125,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [
				"PHGA3AgPnj2rFrYOjZVdC"
			],
			"frameId": null,
			"index": "aO",
			"roundness": null,
			"seed": 864376460,
			"version": 59,
			"versionNonce": 1230604227,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750819934388,
			"link": null,
			"locked": false,
			"text": "Git for Windows",
			"rawText": "Git for Windows",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "iH6EVXAdTW7BKywEmwX3S",
			"originalText": "Git for Windows",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "4VsXpo93",
			"type": "text",
			"x": 518.9820818026534,
			"y": 20.696916592792377,
			"width": 37.13385009765625,
			"height": 9.05587430855184,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [
				"PHGA3AgPnj2rFrYOjZVdC"
			],
			"frameId": null,
			"index": "aP",
			"roundness": null,
			"seed": 1357580621,
			"version": 47,
			"versionNonce": 951454189,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750819934388,
			"link": null,
			"locked": false,
			"text": "install 1st!",
			"rawText": "install 1st!",
			"fontSize": 7.244699446841471,
			"fontFamily": 5,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "install 1st!",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "GYbVy7KY17TeKRgE4YTyR",
			"type": "rectangle",
			"x": 1100,
			"y": 200,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aQ",
			"roundness": {
				"type": 3
			},
			"seed": 584932163,
			"version": 27,
			"versionNonce": 837605607,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "hxkrjkCe"
				},
				{
					"id": "YDirVJ8zC6mRdBLnRdGbd",
					"type": "arrow"
				},
				{
					"id": "NlbDkZuafq8BXIL31USxB",
					"type": "arrow"
				},
				{
					"id": "JXei54iI_izd3u6BOmcA9",
					"type": "arrow"
				}
			],
			"updated": 1750920444939,
			"link": null,
			"locked": false
		},
		{
			"id": "hxkrjkCe",
			"type": "text",
			"x": 1164.800048828125,
			"y": 240,
			"width": 70.39990234375,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aQV",
			"roundness": null,
			"seed": 1898909101,
			"version": 13,
			"versionNonce": 186275523,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750822034267,
			"link": null,
			"locked": false,
			"text": "Projects",
			"rawText": "Projects",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "GYbVy7KY17TeKRgE4YTyR",
			"originalText": "Projects",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "JXei54iI_izd3u6BOmcA9",
			"type": "arrow",
			"x": -0.09999999999999432,
			"y": 105,
			"width": 1200,
			"height": 90,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aR",
			"roundness": null,
			"seed": 145436269,
			"version": 164,
			"versionNonce": 202839119,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048586,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					45
				],
				[
					1200,
					45
				],
				[
					1200,
					90
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "gaDcKV4jG1VFjDJcO6IpK",
				"focus": 0.9368029739776951,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000006,
					1.05
				]
			},
			"endBinding": {
				"elementId": "GYbVy7KY17TeKRgE4YTyR",
				"focus": 1.12,
				"gap": 6,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "LTqfdcHg",
			"type": "text",
			"x": 1120,
			"y": 280,
			"width": 172.7923583984375,
			"height": 11.02562923318203,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aS",
			"roundness": null,
			"seed": 395482637,
			"version": 80,
			"versionNonce": 978346531,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750822061482,
			"link": null,
			"locked": false,
			"text": "might switch to Bases (new Core plugin)",
			"rawText": "might switch to Bases (new Core plugin)",
			"fontSize": 8.820503386545624,
			"fontFamily": 5,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "might switch to Bases (new Core plugin)",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "YDirVJ8zC6mRdBLnRdGbd",
			"type": "arrow",
			"x": 1199.9000000000003,
			"y": 65,
			"width": 20.09999999999968,
			"height": 130,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aU",
			"roundness": null,
			"seed": 10029485,
			"version": 129,
			"versionNonce": 2079175279,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048587,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					65
				],
				[
					20.09999999999968,
					65
				],
				[
					20.09999999999968,
					130
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "WHLBiNwF",
				"focus": 0.0009999999999969588,
				"gap": 5,
				"fixedPoint": [
					0.4995000000000016,
					1.05
				]
			},
			"endBinding": {
				"elementId": "GYbVy7KY17TeKRgE4YTyR",
				"focus": 0.2,
				"gap": 5,
				"fixedPoint": [
					0.6,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "WHLBiNwF",
			"type": "rectangle",
			"x": 1100,
			"y": -40,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aV",
			"roundness": {
				"type": 3
			},
			"seed": 749367149,
			"version": 95,
			"versionNonce": 1085395477,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "SeWw2zVJ"
				},
				{
					"id": "YDirVJ8zC6mRdBLnRdGbd",
					"type": "arrow"
				}
			],
			"updated": 1750822676223,
			"link": "[[BiB.md]]",
			"locked": false
		},
		{
			"id": "SeWw2zVJ",
			"type": "text",
			"x": 1125.2001037597656,
			"y": 0,
			"width": 149.59979248046875,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aW",
			"roundness": null,
			"seed": 1306786253,
			"version": 29,
			"versionNonce": 361823715,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750822672798,
			"link": null,
			"locked": false,
			"text": "Eisenhower Matrix",
			"rawText": "Eisenhower Matrix",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "WHLBiNwF",
			"originalText": "Eisenhower Matrix",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "_uytolSWyQNxpJ8BSELSj",
			"type": "rectangle",
			"x": 1100,
			"y": 400,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aZ",
			"roundness": {
				"type": 3
			},
			"seed": 349343405,
			"version": 4,
			"versionNonce": 730966947,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "NlbDkZuafq8BXIL31USxB",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "MWFgxSPL"
				}
			],
			"updated": 1750822687817,
			"link": null,
			"locked": false
		},
		{
			"id": "MWFgxSPL",
			"type": "text",
			"x": 1164.800048828125,
			"y": 440,
			"width": 70.39990234375,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aZV",
			"roundness": null,
			"seed": 8868269,
			"version": 13,
			"versionNonce": 327518349,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750822692972,
			"link": null,
			"locked": false,
			"text": "Calendar",
			"rawText": "Calendar",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "_uytolSWyQNxpJ8BSELSj",
			"originalText": "Calendar",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "NlbDkZuafq8BXIL31USxB",
			"type": "arrow",
			"x": 1199.9000000000003,
			"y": 305,
			"width": 0,
			"height": 90,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aa",
			"roundness": null,
			"seed": 1113898659,
			"version": 97,
			"versionNonce": 260803727,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048587,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					90
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "GYbVy7KY17TeKRgE4YTyR",
				"focus": 0,
				"gap": 6,
				"fixedPoint": [
					0.4995000000000016,
					1.05
				]
			},
			"endBinding": {
				"elementId": "_uytolSWyQNxpJ8BSELSj",
				"focus": 0.0006288601909002409,
				"gap": 6,
				"fixedPoint": [
					0.4995000000000016,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "az99Pwex",
			"type": "text",
			"x": 1128.4584671065454,
			"y": 426.8148106273326,
			"width": 37.61993408203125,
			"height": 14.254465664391775,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ab",
			"roundness": null,
			"seed": 1631214093,
			"version": 63,
			"versionNonce": 132911821,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750822701496,
			"link": null,
			"locked": false,
			"text": "Google",
			"rawText": "Google",
			"fontSize": 11.40357253151342,
			"fontFamily": 8,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Google",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "zspshMx0",
			"type": "text",
			"x": 1200.7606032343444,
			"y": 259.90207638776724,
			"width": 67.42054748535156,
			"height": 12.565876392643933,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ac",
			"roundness": null,
			"seed": 604091021,
			"version": 58,
			"versionNonce": 1392924717,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750824634582,
			"link": "[[task kanban]]",
			"locked": false,
			"text": "📍task kanban",
			"rawText": "[[task kanban]]",
			"fontSize": 10.052701114115147,
			"fontFamily": 5,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "📍task kanban",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "twnkyi94XqscUNgtKTc88",
			"type": "rectangle",
			"x": 1400,
			"y": 200,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ad",
			"roundness": {
				"type": 3
			},
			"seed": 437545664,
			"version": 57,
			"versionNonce": 1662051316,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "xkobL26j"
				},
				{
					"id": "_th1qzWgdlQ2sSITtXc-h",
					"type": "arrow"
				},
				{
					"id": "ImG-PPrGnJyPtmoy9euyl",
					"type": "arrow"
				},
				{
					"id": "i_S_Hpbwy-P5CUg_xdKAy",
					"type": "arrow"
				},
				{
					"id": "uQaROpA3WS5a8DJGG120g",
					"type": "arrow"
				},
				{
					"id": "jeWMWjqMYRCf6At0ZYbab",
					"type": "arrow"
				},
				{
					"id": "l9Evb2IhIRUDVLyyJ3UYS",
					"type": "arrow"
				}
			],
			"updated": 1756298097192,
			"link": null,
			"locked": false
		},
		{
			"id": "xkobL26j",
			"type": "text",
			"x": 1451.6000671386719,
			"y": 240,
			"width": 96.79986572265625,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "adV",
			"roundness": null,
			"seed": 2075986624,
			"version": 16,
			"versionNonce": 1437827392,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750841266598,
			"link": null,
			"locked": false,
			"text": "QOL plugins",
			"rawText": "QOL plugins",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "twnkyi94XqscUNgtKTc88",
			"originalText": "QOL plugins",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "uQaROpA3WS5a8DJGG120g",
			"type": "arrow",
			"x": -0.09999999999999432,
			"y": 105,
			"width": 1500,
			"height": 90,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ae",
			"roundness": null,
			"seed": 265068864,
			"version": 194,
			"versionNonce": 1413827855,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048589,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					45
				],
				[
					1500,
					45
				],
				[
					1500,
					90
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "gaDcKV4jG1VFjDJcO6IpK",
				"focus": -0.9368029739776951,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000006,
					1.05
				]
			},
			"endBinding": {
				"elementId": "twnkyi94XqscUNgtKTc88",
				"focus": -1.12,
				"gap": 6,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "XiIkE-MCQsBLyaOK5WlNX",
			"type": "rectangle",
			"x": 1260,
			"y": 520,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ag",
			"roundness": {
				"type": 3
			},
			"seed": 1844488512,
			"version": 21,
			"versionNonce": 1701733056,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "_th1qzWgdlQ2sSITtXc-h",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "mOxShkN3"
				}
			],
			"updated": 1750842688251,
			"link": null,
			"locked": false
		},
		{
			"id": "mOxShkN3",
			"type": "text",
			"x": 1294.0000915527344,
			"y": 560,
			"width": 131.99981689453125,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "agV",
			"roundness": null,
			"seed": 696865088,
			"version": 20,
			"versionNonce": 1460931264,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750842688251,
			"link": null,
			"locked": false,
			"text": "Link with Alias",
			"rawText": "Link with Alias",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "XiIkE-MCQsBLyaOK5WlNX",
			"originalText": "Link with Alias",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "_th1qzWgdlQ2sSITtXc-h",
			"type": "arrow",
			"x": 1499.9,
			"y": 305,
			"width": 139.99999999999977,
			"height": 210,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ah",
			"roundness": null,
			"seed": 632916672,
			"version": 162,
			"versionNonce": 1699812207,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048591,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					105
				],
				[
					-139.99999999999977,
					105
				],
				[
					-139.99999999999977,
					210
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "twnkyi94XqscUNgtKTc88",
				"focus": -0.7058823529411757,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000044,
					1.05
				]
			},
			"endBinding": {
				"elementId": "XiIkE-MCQsBLyaOK5WlNX",
				"focus": -1.12,
				"gap": 6,
				"fixedPoint": [
					0.4995000000000016,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "nXOYeFznH-ZQ4pXmg1xFn",
			"type": "rectangle",
			"x": 1400,
			"y": 640,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ai",
			"roundness": {
				"type": 3
			},
			"seed": 1063027392,
			"version": 18,
			"versionNonce": 1983201984,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "ImG-PPrGnJyPtmoy9euyl",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "kQoJgzld"
				}
			],
			"updated": 1750844264173,
			"link": null,
			"locked": false
		},
		{
			"id": "kQoJgzld",
			"type": "text",
			"x": 1429.60009765625,
			"y": 680,
			"width": 140.7998046875,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aiV",
			"roundness": null,
			"seed": 1275425088,
			"version": 19,
			"versionNonce": 549026112,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750844270136,
			"link": null,
			"locked": false,
			"text": "Smart Typography",
			"rawText": "Smart Typography",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "nXOYeFznH-ZQ4pXmg1xFn",
			"originalText": "Smart Typography",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "ImG-PPrGnJyPtmoy9euyl",
			"type": "arrow",
			"x": 1499.9,
			"y": 305,
			"width": 0,
			"height": 330,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aj",
			"roundness": null,
			"seed": 1420953920,
			"version": 148,
			"versionNonce": 400215439,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048591,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					330
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "twnkyi94XqscUNgtKTc88",
				"focus": 0,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000044,
					1.05
				]
			},
			"endBinding": {
				"elementId": "nXOYeFznH-ZQ4pXmg1xFn",
				"focus": 0.0006288601909009231,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000044,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "Ps6u19wGh11RP988RYfb8",
			"type": "rectangle",
			"x": 1560,
			"y": 520,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ak",
			"roundness": {
				"type": 3
			},
			"seed": 1413976384,
			"version": 16,
			"versionNonce": 2047255232,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "i_S_Hpbwy-P5CUg_xdKAy",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "ObOixo7c"
				}
			],
			"updated": 1750844410133,
			"link": null,
			"locked": false
		},
		{
			"id": "ObOixo7c",
			"type": "text",
			"x": 1602.8000793457031,
			"y": 560,
			"width": 114.39984130859375,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "akV",
			"roundness": null,
			"seed": 1250824512,
			"version": 16,
			"versionNonce": 61051200,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750844414461,
			"link": null,
			"locked": false,
			"text": "Copy to Block",
			"rawText": "Copy to Block",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Ps6u19wGh11RP988RYfb8",
			"originalText": "Copy to Block",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "i_S_Hpbwy-P5CUg_xdKAy",
			"type": "arrow",
			"x": 1499.9,
			"y": 305,
			"width": 160,
			"height": 210,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "al",
			"roundness": null,
			"seed": 581247680,
			"version": 135,
			"versionNonce": 1634223023,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048592,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					105
				],
				[
					160,
					105
				],
				[
					160,
					210
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "twnkyi94XqscUNgtKTc88",
				"focus": 0.7058823529411777,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000044,
					1.05
				]
			},
			"endBinding": {
				"elementId": "Ps6u19wGh11RP988RYfb8",
				"focus": 1.12,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000044,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "NuwUMPF6",
			"type": "embeddable",
			"x": 1200,
			"y": 600,
			"width": 100,
			"height": 100,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"roundness": null,
			"seed": 47888,
			"version": 178,
			"versionNonce": 2046661957,
			"updated": 1750920440668,
			"isDeleted": false,
			"groupIds": [],
			"boundElements": [],
			"link": "[[UltraInSync#create alias from existing text]]",
			"locked": false,
			"scale": [
				0.25,
				0.25
			],
			"customData": {
				"mdProps": {
					"useObsidianDefaults": false,
					"backgroundMatchCanvas": false,
					"backgroundMatchElement": false,
					"backgroundColor": "#edf2f8",
					"backgroundOpacity": 90,
					"borderMatchElement": true,
					"borderColor": "#fff",
					"borderOpacity": 100,
					"filenameVisible": true
				}
			},
			"index": "am",
			"frameId": null
		},
		{
			"id": "AHMWSXIi",
			"type": "text",
			"x": 1460,
			"y": 720,
			"width": 133.3966522216797,
			"height": 11.317693357127617,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "an",
			"roundness": null,
			"seed": 1023461696,
			"version": 83,
			"versionNonce": 867576512,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750844468311,
			"link": null,
			"locked": false,
			"text": "e.g. auto convert to 1/3 to ⅓",
			"rawText": "e.g. auto convert to 1/3 to ⅓",
			"fontSize": 9.054154685702093,
			"fontFamily": 5,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "e.g. auto convert to 1/3 to ⅓",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "dWR19DM2",
			"type": "text",
			"x": 1581.4668299494317,
			"y": 593.7421896997815,
			"width": 165.32716369628906,
			"height": 15.554578566666361,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ao",
			"roundness": null,
			"seed": 2046523712,
			"version": 316,
			"versionNonce": 406631104,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750844646599,
			"link": null,
			"locked": false,
			"text": "right click on text will auto create block id \"^o2m1mv\" \n(easy referencing)",
			"rawText": "right click on text will auto create block id \"^o2m1mv\" \n(easy referencing)",
			"fontSize": 6.221831426666545,
			"fontFamily": 5,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "right click on text will auto create block id \"^o2m1mv\" \n(easy referencing)",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "vRfrXrn5uLzxeEwf_Pcl8",
			"type": "rectangle",
			"x": 160,
			"y": -380,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ap",
			"roundness": {
				"type": 3
			},
			"seed": 1889966784,
			"version": 31,
			"versionNonce": 1548856679,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "yb305I5g"
				},
				{
					"id": "H8j2CmMtHPSxt1-_86ygy",
					"type": "arrow"
				}
			],
			"updated": 1750920444939,
			"link": null,
			"locked": false
		},
		{
			"id": "yb305I5g",
			"type": "text",
			"x": 229.20004272460938,
			"y": -340,
			"width": 61.59991455078125,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "apV",
			"roundness": null,
			"seed": 492362048,
			"version": 16,
			"versionNonce": 160817065,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750920322050,
			"link": null,
			"locked": false,
			"text": "website",
			"rawText": "website",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "vRfrXrn5uLzxeEwf_Pcl8",
			"originalText": "website",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "H8j2CmMtHPSxt1-_86ygy",
			"type": "arrow",
			"x": -0.09999999999999432,
			"y": -205,
			"width": 260,
			"height": 70,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aq",
			"roundness": null,
			"seed": 1186296128,
			"version": 191,
			"versionNonce": 572650959,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048592,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					-35
				],
				[
					260,
					-35
				],
				[
					260,
					-70
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "t1gfJKie2soiTTKxBYDpM",
				"focus": -0.001,
				"gap": 5,
				"fixedPoint": [
					0.49950000000000006,
					-0.05
				]
			},
			"endBinding": {
				"elementId": "vRfrXrn5uLzxeEwf_Pcl8",
				"focus": -0.0006288601909038451,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000006,
					1.05
				]
			},
			"startArrowhead": "triangle_outline",
			"endArrowhead": null,
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "v5SQUf4Z",
			"type": "text",
			"x": 239.1554921004971,
			"y": -299.8117050250397,
			"width": 110.05284118652344,
			"height": 11.420632329072987,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ar",
			"roundness": null,
			"seed": 64903488,
			"version": 129,
			"versionNonce": 1002701353,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750920328749,
			"link": null,
			"locked": false,
			"text": "build with Quartz (MWM)",
			"rawText": "build with Quartz (MWM)",
			"fontSize": 9.136505863258389,
			"fontFamily": 5,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "build with Quartz (MWM)",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "2npIbPdp",
			"type": "text",
			"x": -133.59797227068987,
			"y": -272.8038519461412,
			"width": 275.503173828125,
			"height": 21.6,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "at",
			"roundness": null,
			"seed": 1299937187,
			"version": 319,
			"versionNonce": 652629801,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750920444354,
			"link": null,
			"locked": false,
			"text": "⁂ Version controlling documentations",
			"rawText": "⁂ Version controlling documentations",
			"fontSize": 16,
			"fontFamily": 6,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "⁂ Version controlling documentations",
			"autoResize": true,
			"lineHeight": 1.35
		},
		{
			"id": "dtJvHj9AQuPDpYXkmDrBW",
			"type": "arrow",
			"x": -0.09999999999999432,
			"y": -5,
			"width": 0,
			"height": 90,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "au",
			"roundness": null,
			"seed": 1444951497,
			"version": 225,
			"versionNonce": 1737277679,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048582,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					-90
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "gaDcKV4jG1VFjDJcO6IpK",
				"focus": -0.0009999999999999432,
				"gap": 5,
				"fixedPoint": [
					0.49950000000000006,
					-0.05
				]
			},
			"endBinding": {
				"elementId": "t1gfJKie2soiTTKxBYDpM",
				"focus": 0.001,
				"gap": 5,
				"fixedPoint": [
					0.49950000000000006,
					1.05
				]
			},
			"startArrowhead": "triangle_outline",
			"endArrowhead": null,
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "TPWbnCivGK7gbnGwc0vIU",
			"type": "rectangle",
			"x": -400,
			"y": 0,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "aw",
			"roundness": {
				"type": 3
			},
			"seed": 160989927,
			"version": 4,
			"versionNonce": 1867115495,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "kvm6irecp67sqluW0KLPq",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "EPKA6HmL"
				}
			],
			"updated": 1750920475019,
			"link": null,
			"locked": false
		},
		{
			"id": "EPKA6HmL",
			"type": "text",
			"x": -322,
			"y": 37.5,
			"width": 44,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "awV",
			"roundness": null,
			"seed": 1430730537,
			"version": 9,
			"versionNonce": 1830100999,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750920481855,
			"link": null,
			"locked": false,
			"text": "Core",
			"rawText": "Core",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "TPWbnCivGK7gbnGwc0vIU",
			"originalText": "Core",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "kvm6irecp67sqluW0KLPq",
			"type": "arrow",
			"x": -105,
			"y": 49.9,
			"width": 90.00000000000003,
			"height": 0,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ax",
			"roundness": null,
			"seed": 1548927753,
			"version": 67,
			"versionNonce": 555770863,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048593,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-90.00000000000003,
					0
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "gaDcKV4jG1VFjDJcO6IpK",
				"focus": 0,
				"gap": 6,
				"fixedPoint": [
					-0.025,
					0.499
				]
			},
			"endBinding": {
				"elementId": "TPWbnCivGK7gbnGwc0vIU",
				"focus": 0.0023766816143500472,
				"gap": 6,
				"fixedPoint": [
					1.025,
					0.499
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "YMBa-KtZHvnjGcne9zNfU",
			"type": "image",
			"x": -300,
			"y": 80,
			"width": 140.00000000000003,
			"height": 45.96273291925467,
			"angle": 0,
			"strokeColor": "transparent",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "ay",
			"roundness": null,
			"seed": 731988839,
			"version": 92,
			"versionNonce": 1239744137,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1750920667605,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "84cc6e222a1a6c9f365f5a3891ffda4441a47b0f",
			"scale": [
				1,
				1
			],
			"crop": null
		},
		{
			"id": "jR8J5lxY",
			"type": "embeddable",
			"x": -460,
			"y": 40,
			"width": 100,
			"height": 100,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"roundness": null,
			"seed": 37855,
			"version": 186,
			"versionNonce": 1183262143,
			"updated": 1750920669194,
			"isDeleted": false,
			"groupIds": [],
			"boundElements": [],
			"link": "[[content/UltraInSync.md#Core Settings]]",
			"locked": false,
			"scale": [
				0.15,
				0.15
			],
			"customData": {
				"mdProps": {
					"useObsidianDefaults": false,
					"backgroundMatchCanvas": false,
					"backgroundMatchElement": false,
					"backgroundColor": "#edf2f8",
					"backgroundOpacity": 90,
					"borderMatchElement": true,
					"borderColor": "#fff",
					"borderOpacity": 100,
					"filenameVisible": true
				}
			},
			"index": "az",
			"frameId": null
		},
		{
			"id": "mncBYqZIPf1Yu5zAO_zCe",
			"type": "arrow",
			"x": 620,
			"y": 195,
			"width": 20.100000000000023,
			"height": 90,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 50,
			"groupIds": [],
			"frameId": null,
			"index": "b00",
			"roundness": null,
			"seed": 1942937015,
			"version": 239,
			"versionNonce": 236560879,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048585,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					-45
				],
				[
					-20.100000000000023,
					-45
				],
				[
					-20.100000000000023,
					-90
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "Zebxt0ukMYo9Acj463QSJ",
				"focus": 0.2,
				"gap": 5,
				"fixedPoint": [
					0.6,
					-0.05
				]
			},
			"endBinding": {
				"elementId": "iH6EVXAdTW7BKywEmwX3S",
				"focus": 0.0010000000000001707,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999999,
					1.05
				]
			},
			"startArrowhead": "triangle_outline",
			"endArrowhead": null,
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "pGlrXwhfGLsSwpOQK4crh",
			"type": "image",
			"x": 316.6298872785337,
			"y": -285.0203480343333,
			"width": 100,
			"height": 100,
			"angle": 0,
			"strokeColor": "transparent",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 50,
			"groupIds": [
				"QMfq-AUG6vr04ONHr_Bhl"
			],
			"frameId": null,
			"index": "b01",
			"roundness": null,
			"seed": 67989824,
			"version": 167,
			"versionNonce": 1010931737,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1751642143384,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "385d2528eab9421b751cb5a01651bc7616c1f44b",
			"scale": [
				1,
				1
			],
			"crop": null
		},
		{
			"id": "vcNOIeht",
			"type": "embeddable",
			"x": 316.6298872785337,
			"y": -285.0203480343333,
			"width": 100,
			"height": 100,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"roundness": null,
			"seed": 11876,
			"version": 196,
			"versionNonce": 1414943271,
			"updated": 1751642143384,
			"isDeleted": false,
			"groupIds": [
				"QMfq-AUG6vr04ONHr_Bhl"
			],
			"boundElements": [],
			"link": "[[content/UltraInSync.md#Website Setup]]",
			"locked": false,
			"scale": [
				0.3,
				0.3
			],
			"customData": {
				"mdProps": {
					"useObsidianDefaults": false,
					"backgroundMatchCanvas": false,
					"backgroundMatchElement": false,
					"backgroundColor": "#edf2f8",
					"backgroundOpacity": 90,
					"borderMatchElement": true,
					"borderColor": "#fff",
					"borderOpacity": 100,
					"filenameVisible": true
				}
			},
			"index": "b02",
			"frameId": null
		},
		{
			"id": "GPS-oV6NCmvZ58amIJqhQ",
			"type": "rectangle",
			"x": 1700,
			"y": 400,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b03",
			"roundness": {
				"type": 3
			},
			"seed": 1898800486,
			"version": 23,
			"versionNonce": 394663206,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "jeWMWjqMYRCf6At0ZYbab",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "IBbRRZio"
				}
			],
			"updated": 1754590460561,
			"link": null,
			"locked": false
		},
		{
			"id": "IBbRRZio",
			"type": "text",
			"x": 1772.5,
			"y": 437.5,
			"width": 55,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b03V",
			"roundness": null,
			"seed": 511620986,
			"version": 14,
			"versionNonce": 68287142,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1754590473903,
			"link": null,
			"locked": false,
			"text": "PDF++",
			"rawText": "PDF++",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "GPS-oV6NCmvZ58amIJqhQ",
			"originalText": "PDF++",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "jeWMWjqMYRCf6At0ZYbab",
			"type": "arrow",
			"x": 1499.9,
			"y": 305,
			"width": 300,
			"height": 90,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b04",
			"roundness": null,
			"seed": 248679418,
			"version": 97,
			"versionNonce": 778833423,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048594,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					45
				],
				[
					300,
					45
				],
				[
					300,
					90
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "twnkyi94XqscUNgtKTc88",
				"focus": 0.8659793814433004,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000044,
					1.05
				]
			},
			"endBinding": {
				"elementId": "GPS-oV6NCmvZ58amIJqhQ",
				"focus": 1.12,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000044,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "C0Paks1uzEiSNCUKkYBWO",
			"type": "rectangle",
			"x": 301.74744433957767,
			"y": -690.044051793831,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b05",
			"roundness": {
				"type": 3
			},
			"seed": 560954133,
			"version": 100,
			"versionNonce": 163795195,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "Lp74GBvh"
				}
			],
			"updated": 1756087886928,
			"link": null,
			"locked": false
		},
		{
			"id": "Lp74GBvh",
			"type": "text",
			"x": 353.34751147824954,
			"y": -650.044051793831,
			"width": 96.79986572265625,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b06",
			"roundness": null,
			"seed": 1079595125,
			"version": 97,
			"versionNonce": 1086683547,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756087886928,
			"link": null,
			"locked": false,
			"text": "UltraInSync",
			"rawText": "UltraInSync",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "C0Paks1uzEiSNCUKkYBWO",
			"originalText": "UltraInSync",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "zNhtnVpz",
			"type": "text",
			"x": 320.0881375321553,
			"y": -615.11010059298,
			"width": 167.0078582763672,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b07",
			"roundness": null,
			"seed": 657620053,
			"version": 120,
			"versionNonce": 1924763195,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756087886928,
			"link": null,
			"locked": false,
			"text": "infinite whiteboarding",
			"rawText": "infinite whiteboarding",
			"fontSize": 16,
			"fontFamily": 5,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "infinite whiteboarding",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "ER1K9zKr",
			"type": "text",
			"x": 260,
			"y": -720,
			"width": 291.34320068359375,
			"height": 21.6,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b08",
			"roundness": null,
			"seed": 223049013,
			"version": 404,
			"versionNonce": 1115819739,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756087886928,
			"link": null,
			"locked": false,
			"text": "⁂ get every members on the same page",
			"rawText": "⁂ get every members on the same page",
			"fontSize": 16,
			"fontFamily": 6,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "⁂ get every members on the same page",
			"autoResize": true,
			"lineHeight": 1.35
		},
		{
			"id": "vyVu3gB0",
			"type": "text",
			"x": 371.18818630539397,
			"y": -542.8838626388949,
			"width": 257.25030517578125,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b09",
			"roundness": null,
			"seed": 956242107,
			"version": 34,
			"versionNonce": 1685687355,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756087937329,
			"locked": false,
			"text": "📍Cornell Note taking style",
			"rawText": "[[Cornell Note taking style]]",
			"fontSize": 20,
			"fontFamily": 5,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "📍Cornell Note taking style",
			"autoResize": true,
			"lineHeight": 1.25,
			"link": "[[Cornell Note taking style]]"
		},
		{
			"id": "uZ8VvTkOMkqHKvQYqoDwc",
			"type": "rectangle",
			"x": 1680,
			"y": 660,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0A",
			"roundness": {
				"type": 3
			},
			"seed": 430123084,
			"version": 174,
			"versionNonce": 596952436,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "l9Evb2IhIRUDVLyyJ3UYS",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "99FSGnOV"
				}
			],
			"updated": 1756298121793,
			"link": null,
			"locked": false
		},
		{
			"id": "99FSGnOV",
			"type": "text",
			"x": 1708.5,
			"y": 697.5,
			"width": 143,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0AV",
			"roundness": null,
			"seed": 1483867468,
			"version": 20,
			"versionNonce": 1130169204,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756298130124,
			"link": null,
			"locked": false,
			"text": "Image Caption",
			"rawText": "Image Caption",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "uZ8VvTkOMkqHKvQYqoDwc",
			"originalText": "Image Caption",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "l9Evb2IhIRUDVLyyJ3UYS",
			"type": "arrow",
			"x": 1499.9,
			"y": 305,
			"width": 280,
			"height": 350,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0B",
			"roundness": null,
			"seed": 599478900,
			"version": 637,
			"versionNonce": 83719215,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048594,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					175
				],
				[
					280,
					175
				],
				[
					280,
					350
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "twnkyi94XqscUNgtKTc88",
				"focus": -0.8659793814432988,
				"gap": 6,
				"fixedPoint": [
					0.49950000000000044,
					1.05
				]
			},
			"endBinding": {
				"elementId": "uZ8VvTkOMkqHKvQYqoDwc",
				"focus": -1.12,
				"gap": 6,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "WvPfbgVO",
			"type": "text",
			"x": 1704.4193381624577,
			"y": 728.6010505894598,
			"width": 159.254150390625,
			"height": 11.892760932681906,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0C",
			"roundness": null,
			"seed": 678072780,
			"version": 279,
			"versionNonce": 1305702772,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756298138296,
			"link": null,
			"locked": false,
			"text": "by adding \"|\" after the image name",
			"rawText": "by adding \"|\" after the image name",
			"fontSize": 9.514208746145524,
			"fontFamily": 5,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "by adding \"|\" after the image name",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "z7guCpu7Ye-ixYvBLDljL",
			"type": "rectangle",
			"x": -400,
			"y": -940,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0D",
			"roundness": {
				"type": 3
			},
			"seed": 1382188537,
			"version": 74,
			"versionNonce": 498519897,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "5Zz0cqIc"
				},
				{
					"id": "tli3IbRjRbOtDJuSBBdv_",
					"type": "arrow"
				},
				{
					"id": "bFTmo9xYP8JrmlNJ2yGaN",
					"type": "arrow"
				},
				{
					"id": "18Fot3WPQKpAfTWmy8mYV",
					"type": "arrow"
				},
				{
					"id": "kgi5dieEe8xD4_F7-XbnD",
					"type": "arrow"
				}
			],
			"updated": 1756888088984,
			"link": null,
			"locked": false
		},
		{
			"id": "5Zz0cqIc",
			"type": "text",
			"x": -365.9999084472656,
			"y": -900,
			"width": 131.99981689453125,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0E",
			"roundness": null,
			"seed": 1676762841,
			"version": 75,
			"versionNonce": 1518956439,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756887996379,
			"link": null,
			"locked": false,
			"text": "ThinkPad Server",
			"rawText": "ThinkPad Server",
			"fontSize": 16,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "z7guCpu7Ye-ixYvBLDljL",
			"originalText": "ThinkPad Server",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "11bFlNi0znd6AT2XByqtY",
			"type": "rectangle",
			"x": -400,
			"y": -620,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0F",
			"roundness": {
				"type": 3
			},
			"seed": 1001638585,
			"version": 227,
			"versionNonce": 1037830551,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "Gikmlb3L"
				},
				{
					"id": "18Fot3WPQKpAfTWmy8mYV",
					"type": "arrow"
				},
				{
					"id": "kgi5dieEe8xD4_F7-XbnD",
					"type": "arrow"
				},
				{
					"id": "D5Fwr-_0kmhMwFR-XF27A",
					"type": "arrow"
				}
			],
			"updated": 1756888118363,
			"link": null,
			"locked": false
		},
		{
			"id": "Gikmlb3L",
			"type": "text",
			"x": -360.5,
			"y": -582.5,
			"width": 121,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0G",
			"roundness": null,
			"seed": 1144785817,
			"version": 248,
			"versionNonce": 49594039,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756888118363,
			"link": null,
			"locked": false,
			"text": "ExternalSSD",
			"rawText": "ExternalSSD",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "11bFlNi0znd6AT2XByqtY",
			"originalText": "ExternalSSD",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "Wdw8qgc15bSkZE6kpe0EK",
			"type": "rectangle",
			"x": -540,
			"y": -460,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0H",
			"roundness": {
				"type": 3
			},
			"seed": 2131235767,
			"version": 155,
			"versionNonce": 674483223,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "I8lv0VY4"
				},
				{
					"id": "E-dvLAPWFKmxGwFZXqclZ",
					"type": "arrow"
				},
				{
					"id": "18Fot3WPQKpAfTWmy8mYV",
					"type": "arrow"
				},
				{
					"id": "D5Fwr-_0kmhMwFR-XF27A",
					"type": "arrow"
				}
			],
			"updated": 1756888101026,
			"link": null,
			"locked": false
		},
		{
			"id": "I8lv0VY4",
			"type": "text",
			"x": -506,
			"y": -422.5,
			"width": 132,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0HV",
			"roundness": null,
			"seed": 396620151,
			"version": 152,
			"versionNonce": 1288337367,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756888080833,
			"link": null,
			"locked": false,
			"text": "Obsidian Web",
			"rawText": "Obsidian Web",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Wdw8qgc15bSkZE6kpe0EK",
			"originalText": "Obsidian Web",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "18Fot3WPQKpAfTWmy8mYV",
			"type": "arrow",
			"x": -300.1000000000001,
			"y": -835,
			"width": 139.99999999999994,
			"height": 370,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0I",
			"roundness": null,
			"seed": 1677551417,
			"version": 914,
			"versionNonce": 1426181903,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					195
				],
				[
					-139.99999999999994,
					195
				],
				[
					-139.99999999999994,
					370
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "z7guCpu7Ye-ixYvBLDljL",
				"focus": 0.0010000000000004547,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999996,
					1.05
				]
			},
			"endBinding": {
				"elementId": "Wdw8qgc15bSkZE6kpe0EK",
				"focus": 0.0006288601909041063,
				"gap": 6,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": [
				{
					"index": 2,
					"start": [
						0,
						195
					],
					"end": [
						-139.99999999999994,
						195
					]
				}
			],
			"startIsSpecial": false,
			"endIsSpecial": false
		},
		{
			"id": "VLp7qHQZ",
			"type": "text",
			"x": -519.9907588214656,
			"y": -389.64598685735484,
			"width": 82.69123840332031,
			"height": 9.645986857354874,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [
				"rYqt6i11kPkCvow60A8oR"
			],
			"frameId": null,
			"index": "b0J",
			"roundness": null,
			"seed": 1467635833,
			"version": 228,
			"versionNonce": 1371657015,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756888080834,
			"link": "https://kb.adsvise.llc/",
			"locked": false,
			"text": "🌐https://kb.adsvise.llc/",
			"rawText": "https://kb.adsvise.llc/",
			"fontSize": 7.716789485883899,
			"fontFamily": 6,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "🌐https://kb.adsvise.llc/",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "s1Yp47oS",
			"type": "text",
			"x": -431.4853793375289,
			"y": -390.19330356007833,
			"width": 76.13719177246094,
			"height": 10.193303560078364,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [
				"rYqt6i11kPkCvow60A8oR"
			],
			"frameId": null,
			"index": "b0K",
			"roundness": null,
			"seed": 2147403255,
			"version": 303,
			"versionNonce": 1454396503,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756888080834,
			"link": null,
			"locked": false,
			"text": "aka localhost:3000",
			"rawText": "aka localhost:3000",
			"fontSize": 8.154642848062691,
			"fontFamily": 5,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "aka localhost:3000",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "6puGR6kW",
			"type": "text",
			"x": -383.9836185283573,
			"y": -925.8749368214485,
			"width": 110.41532897949219,
			"height": 19.477232345267222,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0L",
			"roundness": null,
			"seed": 1721842231,
			"version": 188,
			"versionNonce": 1817537559,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756887996380,
			"link": null,
			"locked": false,
			"text": "ssh.11@abe4r r",
			"rawText": "ssh.11@abe4r r",
			"fontSize": 15.581785876213777,
			"fontFamily": 5,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "ssh.11@abe4r r",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "mOwWBvJD",
			"type": "text",
			"x": -367.9620189860599,
			"y": -542.0691776254321,
			"width": 147.8081817626953,
			"height": 14.616324266996237,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0N",
			"roundness": null,
			"seed": 1596708727,
			"version": 307,
			"versionNonce": 1169535255,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "D5Fwr-_0kmhMwFR-XF27A",
					"type": "arrow"
				}
			],
			"updated": 1756888121730,
			"link": null,
			"locked": false,
			"text": "/config/Desktop/PKMxKB",
			"rawText": "/config/Desktop/PKMxKB",
			"fontSize": 11.69305941359699,
			"fontFamily": 5,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "/config/Desktop/PKMxKB",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "Hm43ajch",
			"type": "text",
			"x": -351.48573709606137,
			"y": -552.605263371336,
			"width": 110.32986450195312,
			"height": 9.645986857354874,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [
				"UeNg6qCYELNbV3GBEmI6d"
			],
			"frameId": null,
			"index": "b0O",
			"roundness": null,
			"seed": 723222873,
			"version": 414,
			"versionNonce": 1267739447,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756888118363,
			"link": "[[Pasted Image 20250903074952_148.png]]",
			"locked": false,
			"text": "stores presistant data under",
			"rawText": "stores presistant data under",
			"fontSize": 7.716789485883899,
			"fontFamily": 5,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "stores presistant data under",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "qhNs2vq1",
			"type": "text",
			"x": -431.52995324059265,
			"y": -378.6390470793724,
			"width": 75.36387289516904,
			"height": 9.324102164296743,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0Q",
			"roundness": null,
			"seed": 962436247,
			"version": 416,
			"versionNonce": 2020716919,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756888080834,
			"link": "https://tailscale.com/kb/1242/tailscale-serve",
			"locked": false,
			"text": "tailscale serve --https=443\nlocalhost:3000",
			"rawText": "tailscale serve --https=443 localhost:3000",
			"fontSize": 3.729640865718697,
			"fontFamily": 5,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "tailscale serve --https=443 localhost:3000",
			"autoResize": false,
			"lineHeight": 1.25
		},
		{
			"id": "HMZT9sL1",
			"type": "text",
			"x": -505.1729160137795,
			"y": -379.0918309407539,
			"width": 55.284332275390625,
			"height": 10.254992206765563,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0R",
			"roundness": null,
			"seed": 1843066679,
			"version": 207,
			"versionNonce": 1347054231,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756888080834,
			"link": null,
			"locked": false,
			"text": "via CF Access",
			"rawText": "via CF Access",
			"fontSize": 8.20399376541245,
			"fontFamily": 5,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "via CF Access",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "Ks7L8jjazaix7BbeKTUvW",
			"type": "rectangle",
			"x": -700,
			"y": -940,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0S",
			"roundness": {
				"type": 3
			},
			"seed": 169360921,
			"version": 19,
			"versionNonce": 287166775,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "tli3IbRjRbOtDJuSBBdv_",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "MJJAFUVG"
				},
				{
					"id": "XeHV0epQ7upKqESVufSqP",
					"type": "arrow"
				}
			],
			"updated": 1756887996380,
			"link": null,
			"locked": false
		},
		{
			"id": "MJJAFUVG",
			"type": "text",
			"x": -677,
			"y": -902.5,
			"width": 154,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0SV",
			"roundness": null,
			"seed": 1927247831,
			"version": 36,
			"versionNonce": 98341463,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756887996380,
			"link": null,
			"locked": false,
			"text": "Surface Server",
			"rawText": "Surface Server",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Ks7L8jjazaix7BbeKTUvW",
			"originalText": "Surface Server",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "tli3IbRjRbOtDJuSBBdv_",
			"type": "arrow",
			"x": -405,
			"y": -890.1,
			"width": 90,
			"height": 0,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0T",
			"roundness": null,
			"seed": 1898253303,
			"version": 373,
			"versionNonce": 664180559,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048598,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-90,
					0
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "z7guCpu7Ye-ixYvBLDljL",
				"focus": 0,
				"gap": 6,
				"fixedPoint": [
					-0.025,
					0.4989999999999998
				]
			},
			"endBinding": {
				"elementId": "Ks7L8jjazaix7BbeKTUvW",
				"focus": 0.0023766816143465804,
				"gap": 6,
				"fixedPoint": [
					1.025,
					0.4989999999999998
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "UdaPxmmp",
			"type": "text",
			"x": -684.1006861810803,
			"y": -931.6558007473172,
			"width": 119.57638549804688,
			"height": 19.47723234526722,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0U",
			"roundness": null,
			"seed": 1394351671,
			"version": 195,
			"versionNonce": 2057383639,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756887996380,
			"link": null,
			"locked": false,
			"text": "ssh.12@abear R",
			"rawText": "ssh.12@abear R",
			"fontSize": 15.581785876213774,
			"fontFamily": 5,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "ssh.12@abear R",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "BqgK7s_XEE29EZU96Wjmc",
			"type": "rectangle",
			"x": -540,
			"y": -760,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0V",
			"roundness": {
				"type": 3
			},
			"seed": 982776823,
			"version": 64,
			"versionNonce": 1904620247,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "l79FqDcy"
				},
				{
					"id": "bFTmo9xYP8JrmlNJ2yGaN",
					"type": "arrow"
				},
				{
					"id": "XeHV0epQ7upKqESVufSqP",
					"type": "arrow"
				},
				{
					"id": "BdRmtuDiY3mGwfN5tswwO",
					"type": "arrow"
				},
				{
					"id": "ni6k8AuSbYcIW8FTr0UgZ",
					"type": "arrow"
				},
				{
					"id": "E-dvLAPWFKmxGwFZXqclZ",
					"type": "arrow"
				},
				{
					"id": "BmHggE6gGmwsSEg3N9Ska",
					"type": "arrow"
				}
			],
			"updated": 1756905356916,
			"link": null,
			"locked": false
		},
		{
			"id": "l79FqDcy",
			"type": "text",
			"x": -489.5,
			"y": -722.5,
			"width": 99,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0W",
			"roundness": null,
			"seed": 1556047127,
			"version": 68,
			"versionNonce": 236844215,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756887927953,
			"link": null,
			"locked": false,
			"text": "Syncthing",
			"rawText": "Syncthing",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "BqgK7s_XEE29EZU96Wjmc",
			"originalText": "Syncthing",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "bFTmo9xYP8JrmlNJ2yGaN",
			"type": "arrow",
			"x": -300.1000000000001,
			"y": -835,
			"width": 139.99999999999994,
			"height": 70,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0X",
			"roundness": null,
			"seed": 1777233049,
			"version": 467,
			"versionNonce": 1028018063,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048598,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					35
				],
				[
					-139.99999999999994,
					35
				],
				[
					-139.99999999999994,
					70
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "z7guCpu7Ye-ixYvBLDljL",
				"focus": 0.0010000000000004547,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999996,
					1.05
				]
			},
			"endBinding": {
				"elementId": "BqgK7s_XEE29EZU96Wjmc",
				"focus": -0.001,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "XeHV0epQ7upKqESVufSqP",
			"type": "arrow",
			"x": -600.1,
			"y": -835,
			"width": 160,
			"height": 70,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0Y",
			"roundness": null,
			"seed": 35868855,
			"version": 489,
			"versionNonce": 303269295,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048599,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					35
				],
				[
					160,
					35
				],
				[
					160,
					70
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "Ks7L8jjazaix7BbeKTUvW",
				"focus": 0.001,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999999,
					1.05
				]
			},
			"endBinding": {
				"elementId": "BqgK7s_XEE29EZU96Wjmc",
				"focus": -0.001,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "myj0COc6hoC4jjW7uprEm",
			"type": "rectangle",
			"x": -940,
			"y": -940,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0Z",
			"roundness": {
				"type": 3
			},
			"seed": 1913591,
			"version": 95,
			"versionNonce": 1041780505,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "dwrG0elH"
				},
				{
					"id": "BdRmtuDiY3mGwfN5tswwO",
					"type": "arrow"
				}
			],
			"updated": 1756887993478,
			"link": null,
			"locked": false
		},
		{
			"id": "dwrG0elH",
			"type": "text",
			"x": -884,
			"y": -902.5,
			"width": 88,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0a",
			"roundness": null,
			"seed": 705281047,
			"version": 111,
			"versionNonce": 609289209,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756887993478,
			"link": null,
			"locked": false,
			"text": "iPad Air",
			"rawText": "iPad Air",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "myj0COc6hoC4jjW7uprEm",
			"originalText": "iPad Air",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "vvytxLd185TIQL3JmfpUd",
			"type": "rectangle",
			"x": -160,
			"y": -940,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0b",
			"roundness": {
				"type": 3
			},
			"seed": 200918425,
			"version": 121,
			"versionNonce": 2132106487,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "si4AF6S1"
				},
				{
					"id": "ni6k8AuSbYcIW8FTr0UgZ",
					"type": "arrow"
				}
			],
			"updated": 1756887999503,
			"link": null,
			"locked": false
		},
		{
			"id": "si4AF6S1",
			"type": "text",
			"x": -104,
			"y": -902.5,
			"width": 88,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0c",
			"roundness": null,
			"seed": 1405069945,
			"version": 137,
			"versionNonce": 745317911,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756887999503,
			"link": null,
			"locked": false,
			"text": "iPad Air",
			"rawText": "iPad Air",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "vvytxLd185TIQL3JmfpUd",
			"originalText": "iPad Air",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "BdRmtuDiY3mGwfN5tswwO",
			"type": "arrow",
			"x": -840.1,
			"y": -835,
			"width": 400,
			"height": 70,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0d",
			"roundness": null,
			"seed": 958578937,
			"version": 466,
			"versionNonce": 1075779663,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048600,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					35
				],
				[
					400,
					35
				],
				[
					400,
					70
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "myj0COc6hoC4jjW7uprEm",
				"focus": 0.001,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999999,
					1.05
				]
			},
			"endBinding": {
				"elementId": "BqgK7s_XEE29EZU96Wjmc",
				"focus": 1.1,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "ni6k8AuSbYcIW8FTr0UgZ",
			"type": "arrow",
			"x": -60.099999999999994,
			"y": -835,
			"width": 380,
			"height": 70,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0e",
			"roundness": null,
			"seed": 1584658231,
			"version": 498,
			"versionNonce": 2018850415,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048601,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					35
				],
				[
					-380,
					35
				],
				[
					-380,
					70
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "vvytxLd185TIQL3JmfpUd",
				"focus": 0.0009999999999997726,
				"gap": 5,
				"fixedPoint": [
					0.49950000000000006,
					1.05
				]
			},
			"endBinding": {
				"elementId": "BqgK7s_XEE29EZU96Wjmc",
				"focus": -0.001,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "E-dvLAPWFKmxGwFZXqclZ",
			"type": "arrow",
			"x": -440.1,
			"y": -655,
			"width": 0,
			"height": 190,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0g",
			"roundness": null,
			"seed": 1682816567,
			"version": 548,
			"versionNonce": 688295951,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048600,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					190
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "BqgK7s_XEE29EZU96Wjmc",
				"focus": 0.001,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999999,
					1.05
				]
			},
			"endBinding": {
				"elementId": "Wdw8qgc15bSkZE6kpe0EK",
				"focus": -0.0010000000000002275,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "kgi5dieEe8xD4_F7-XbnD",
			"type": "arrow",
			"x": -300.1000000000001,
			"y": -835,
			"width": 0,
			"height": 210,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0h",
			"roundness": null,
			"seed": 851510041,
			"version": 989,
			"versionNonce": 176420559,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048596,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					210
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "z7guCpu7Ye-ixYvBLDljL",
				"focus": 0.0012388611171500088,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999996,
					1.05
				]
			},
			"endBinding": {
				"elementId": "11bFlNi0znd6AT2XByqtY",
				"focus": -0.0010000000000004547,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999996,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "D5Fwr-_0kmhMwFR-XF27A",
			"type": "arrow",
			"x": -300,
			"y": -520,
			"width": 140.10000000000002,
			"height": 55,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0i",
			"roundness": null,
			"seed": 733229527,
			"version": 1004,
			"versionNonce": 892540207,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					26.273573320782077
				],
				[
					-140.10000000000002,
					26.273573320782077
				],
				[
					-140.10000000000002,
					55
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "mOwWBvJD",
				"focus": 0.0804024760256873,
				"gap": 7.452853358435846,
				"fixedPoint": [
					0.45979876198715636,
					1.5098992894721441
				]
			},
			"endBinding": {
				"elementId": "Wdw8qgc15bSkZE6kpe0EK",
				"focus": -0.0010000000000002275,
				"gap": 5,
				"fixedPoint": [
					0.4994999999999999,
					-0.05
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "xXJ9a-NS01-GBy6tzBmim",
			"type": "rectangle",
			"x": -80,
			"y": -1200,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0j",
			"roundness": {
				"type": 3
			},
			"seed": 1918909047,
			"version": 66,
			"versionNonce": 1871661239,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "XsuitAUy"
				}
			],
			"updated": 1756900949153,
			"link": null,
			"locked": false
		},
		{
			"id": "XsuitAUy",
			"type": "text",
			"x": -18.5,
			"y": -1162.5,
			"width": 77,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0k",
			"roundness": null,
			"seed": 2105529239,
			"version": 79,
			"versionNonce": 549426585,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756900953982,
			"link": null,
			"locked": false,
			"text": "NextDNS",
			"rawText": "NextDNS",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "xXJ9a-NS01-GBy6tzBmim",
			"originalText": "NextDNS",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "jVdDHGlM",
			"type": "embeddable",
			"x": 80,
			"y": -1120,
			"width": 100,
			"height": 100,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"roundness": null,
			"seed": 1989,
			"version": 143,
			"versionNonce": 674695923,
			"updated": 1756901082930,
			"isDeleted": false,
			"groupIds": [],
			"boundElements": [],
			"link": "[[content/UltraInSync.md#Override NextDNS nameserver injection in Tailscale]]",
			"locked": false,
			"frameId": null,
			"scale": [
				0.25,
				0.25
			],
			"customData": {
				"mdProps": {
					"useObsidianDefaults": false,
					"backgroundMatchCanvas": false,
					"backgroundMatchElement": false,
					"backgroundColor": "#edf2f8",
					"backgroundOpacity": 90,
					"borderMatchElement": true,
					"borderColor": "#fff",
					"borderOpacity": 100,
					"filenameVisible": true
				}
			},
			"index": "b0m"
		},
		{
			"id": "0hbvZJib",
			"type": "text",
			"x": -35.1284212686952,
			"y": -1126.7515584906857,
			"width": 113.03089904785156,
			"height": 16.530445641211152,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0o",
			"roundness": null,
			"seed": 1588294745,
			"version": 92,
			"versionNonce": 117749623,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756901505769,
			"link": null,
			"locked": false,
			"text": "block ads on iPad",
			"rawText": "block ads on iPad",
			"fontSize": 13.224356512968921,
			"fontFamily": 5,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "block ads on iPad",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "LaxPLwvt",
			"type": "embeddable",
			"x": -600,
			"y": -680,
			"width": 120,
			"height": 100,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"roundness": null,
			"seed": 89359,
			"version": 102,
			"versionNonce": 1224922443,
			"updated": 1756902249620,
			"isDeleted": false,
			"groupIds": [],
			"boundElements": [],
			"link": "[[content/UltraInSync.md#install .deb file on Linux, easier to manage than to install using tar.gz]]",
			"locked": false,
			"frameId": null,
			"scale": [
				0.25,
				0.25
			],
			"customData": {
				"mdProps": {
					"useObsidianDefaults": false,
					"backgroundMatchCanvas": false,
					"backgroundMatchElement": false,
					"backgroundColor": "#edf2f8",
					"backgroundOpacity": 90,
					"borderMatchElement": true,
					"borderColor": "#fff",
					"borderOpacity": 100,
					"filenameVisible": true
				}
			},
			"index": "b0p"
		},
		{
			"id": "GEWhaLnK",
			"type": "image",
			"x": -680,
			"y": -780,
			"width": 180,
			"height": 104.0172296531399,
			"angle": 0,
			"strokeColor": "transparent",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 50,
			"roundness": null,
			"seed": 27607,
			"version": 213,
			"versionNonce": 720491609,
			"updated": 1756905678479,
			"isDeleted": false,
			"groupIds": [],
			"boundElements": [],
			"link": null,
			"locked": false,
			"frameId": null,
			"fileId": "0927d85e455cd43b95ed162e4974c8488ca5b8cc",
			"scale": [
				1,
				1
			],
			"crop": null,
			"index": "b0r",
			"status": "pending"
		},
		{
			"id": "8CqUFf1K",
			"type": "image",
			"x": -920,
			"y": -700,
			"width": 240.50713153724243,
			"height": 139.99999999999997,
			"angle": 0,
			"strokeColor": "transparent",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"roundness": null,
			"seed": 23580,
			"version": 191,
			"versionNonce": 992980771,
			"updated": 1756905665379,
			"isDeleted": false,
			"groupIds": [],
			"boundElements": [],
			"link": "https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/configure-tunnels/cloudflared-parameters/origin-parameters/#httphostheader",
			"locked": false,
			"frameId": null,
			"fileId": "e9da9edf97883b893ea5d62f7fd4e4a32eff3bfb",
			"scale": [
				1,
				1
			],
			"crop": null,
			"index": "b0s",
			"status": "pending"
		},
		{
			"id": "X2JXwAeDGpK2JJUu-8wf2",
			"type": "rectangle",
			"x": -1160,
			"y": -760,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0t",
			"roundness": {
				"type": 3
			},
			"seed": 319999065,
			"version": 20,
			"versionNonce": 490075705,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "BmHggE6gGmwsSEg3N9Ska",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "DTs2hPxh"
				}
			],
			"updated": 1756905360783,
			"link": null,
			"locked": false
		},
		{
			"id": "DTs2hPxh",
			"type": "text",
			"x": -1120.5,
			"y": -722.5,
			"width": 121,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0tV",
			"roundness": null,
			"seed": 1959531703,
			"version": 16,
			"versionNonce": 535159865,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756905368413,
			"link": null,
			"locked": false,
			"text": "Cloudflared",
			"rawText": "Cloudflared",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "X2JXwAeDGpK2JJUu-8wf2",
			"originalText": "Cloudflared",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "BmHggE6gGmwsSEg3N9Ska",
			"type": "arrow",
			"x": -545,
			"y": -710.1,
			"width": 410,
			"height": 0,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0u",
			"roundness": null,
			"seed": 1972470199,
			"version": 91,
			"versionNonce": 476221583,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757615048601,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-410,
					0
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "BqgK7s_XEE29EZU96Wjmc",
				"focus": 0,
				"gap": 6,
				"fixedPoint": [
					-0.025,
					0.4989999999999998
				]
			},
			"endBinding": {
				"elementId": "X2JXwAeDGpK2JJUu-8wf2",
				"focus": 0.0023766816143497636,
				"gap": 6,
				"fixedPoint": [
					1.025,
					0.4989999999999998
				]
			},
			"startArrowhead": null,
			"endArrowhead": "triangle_outline",
			"elbowed": true,
			"fixedSegments": null,
			"startIsSpecial": null,
			"endIsSpecial": null
		},
		{
			"id": "p9MEnMuw",
			"type": "embeddable",
			"x": -1220,
			"y": -680,
			"width": 100,
			"height": 100,
			"angle": 0,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"roundness": null,
			"seed": 51648,
			"version": 96,
			"versionNonce": 816113125,
			"updated": 1756905421263,
			"isDeleted": false,
			"groupIds": [],
			"boundElements": [],
			"link": "[[content/UltraInSync.md#Cloudflared commands]]",
			"locked": false,
			"frameId": null,
			"scale": [
				0.25,
				0.25
			],
			"customData": {
				"mdProps": {
					"useObsidianDefaults": false,
					"backgroundMatchCanvas": false,
					"backgroundMatchElement": false,
					"backgroundColor": "#edf2f8",
					"backgroundOpacity": 90,
					"borderMatchElement": true,
					"borderColor": "#fff",
					"borderOpacity": 100,
					"filenameVisible": true
				}
			},
			"index": "b0v"
		},
		{
			"id": "9ycYkY2u",
			"type": "text",
			"x": -649.1853290002805,
			"y": -866.3646302002076,
			"width": 94.17080688476562,
			"height": 15.290083629403517,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0w",
			"roundness": null,
			"seed": 618158137,
			"version": 72,
			"versionNonce": 1146078681,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756906059164,
			"link": null,
			"locked": false,
			"text": "100.108.51.108",
			"rawText": "100.108.51.108",
			"fontSize": 12.232066903522814,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "100.108.51.108",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "QaMSIVRm",
			"type": "text",
			"x": -339.53849216630596,
			"y": -864.4056265777616,
			"width": 76.2298583984375,
			"height": 17.334292966287993,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0x",
			"roundness": null,
			"seed": 2054853655,
			"version": 101,
			"versionNonce": 1342099193,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756906072437,
			"link": null,
			"locked": false,
			"text": "100.73.8.3",
			"rawText": "100.73.8.3",
			"fontSize": 13.867434373030395,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "100.73.8.3",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "MB7lHRZX",
			"type": "text",
			"x": -541.0474408455702,
			"y": -960.0837945058963,
			"width": 165,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0y",
			"roundness": null,
			"seed": 1752717111,
			"version": 67,
			"versionNonce": 879635481,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756906112645,
			"link": null,
			"locked": false,
			"text": "100.107.229.104",
			"rawText": "100.107.229.104",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "100.107.229.104",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "zOeLzYKZRv2hA06Scqv_m",
			"type": "rectangle",
			"x": -558.209428743403,
			"y": -1024.1889391570076,
			"width": 200,
			"height": 100,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b0z",
			"roundness": {
				"type": 3
			},
			"seed": 439610135,
			"version": 182,
			"versionNonce": 2122456985,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "Vnrikmxm"
				}
			],
			"updated": 1756906110678,
			"link": null,
			"locked": false
		},
		{
			"id": "Vnrikmxm",
			"type": "text",
			"x": -507.709428743403,
			"y": -986.6889391570076,
			"width": 99,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b10",
			"roundness": null,
			"seed": 483684407,
			"version": 208,
			"versionNonce": 1210893433,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1756906110678,
			"link": null,
			"locked": false,
			"text": "Elitebook",
			"rawText": "Elitebook",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "zOeLzYKZRv2hA06Scqv_m",
			"originalText": "Elitebook",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "vCIYkrREyccVhkX0qSRtC",
			"type": "rectangle",
			"x": 1004.8212945904536,
			"y": -904.1266641115536,
			"width": 175.1787054095464,
			"height": 288.9683252049298,
			"angle": 0,
			"strokeColor": "transparent",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b13",
			"roundness": {
				"type": 3
			},
			"seed": 1569146763,
			"version": 411,
			"versionNonce": 655010949,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757089602398,
			"link": null,
			"locked": false
		},
		{
			"id": "XPDxc6NPu40CVyjqjxH9B",
			"type": "line",
			"x": 1030.547038124465,
			"y": -397.91846812994856,
			"width": 141.05712828673427,
			"height": 4.297318415318728,
			"angle": 0,
			"strokeColor": "#c2255c",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b16",
			"roundness": {
				"type": 2
			},
			"seed": 1751543083,
			"version": 147,
			"versionNonce": 33022789,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757091587689,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					141.05712828673427,
					-0.160471052303933
				],
				[
					127.98250547317343,
					-4.297318415318728
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"polygon": false
		},
		{
			"id": "O-JN45MWQV4sgC-uk8Kvu",
			"type": "rectangle",
			"x": 1215.7522508829468,
			"y": -684.6982325249242,
			"width": 338.5802243565436,
			"height": 287.53836631001195,
			"angle": 0,
			"strokeColor": "transparent",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b17",
			"roundness": {
				"type": 3
			},
			"seed": 133157157,
			"version": 302,
			"versionNonce": 1421429285,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757091578781,
			"link": null,
			"locked": false
		},
		{
			"id": "MkaqIqZiF5MYDIjskCDY3",
			"type": "rectangle",
			"x": 1218.1116347970737,
			"y": -826.7217260709698,
			"width": 341.33816935685684,
			"height": 65.52603818336001,
			"angle": 0,
			"strokeColor": "transparent",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b18",
			"roundness": {
				"type": 3
			},
			"seed": 2130811595,
			"version": 694,
			"versionNonce": 223741579,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757091582781,
			"link": null,
			"locked": false
		},
		{
			"id": "0qD9aSE7Cvhh65rlqnMkx",
			"type": "rectangle",
			"x": 1462.634388126475,
			"y": -365.9786589941633,
			"width": 40.72525037073906,
			"height": 33.8100213670333,
			"angle": 0,
			"strokeColor": "#ffc9c9",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [
				"VypEpRcJQ4FCUz3XfXKyk"
			],
			"frameId": null,
			"index": "b1F",
			"roundness": {
				"type": 3
			},
			"seed": 1063597067,
			"version": 944,
			"versionNonce": 1645866539,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757091606773,
			"link": null,
			"locked": false
		},
		{
			"id": "DJNh2Rg5",
			"type": "text",
			"x": 1515.1522278611421,
			"y": -360.12885099962796,
			"width": 143,
			"height": 25,
			"angle": 0,
			"strokeColor": "#c2255c",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"groupIds": [
				"VypEpRcJQ4FCUz3XfXKyk"
			],
			"frameId": null,
			"index": "b1G",
			"roundness": null,
			"seed": 1037872075,
			"version": 262,
			"versionNonce": 2024861899,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757091606773,
			"link": null,
			"locked": false,
			"text": "Not .md notes",
			"rawText": "Not .md notes",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Not .md notes",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "jg2t0d_b9UCcdvrCbm-Za",
			"type": "rectangle",
			"x": 1170.5537102795874,
			"y": -365.8686901163752,
			"width": 40.72525037073906,
			"height": 33.8100213670333,
			"angle": 0,
			"strokeColor": "#bbb",
			"backgroundColor": "#e9ecef",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [
				"VypEpRcJQ4FCUz3XfXKyk"
			],
			"frameId": null,
			"index": "b1H",
			"roundness": {
				"type": 3
			},
			"seed": 323408357,
			"version": 1080,
			"versionNonce": 915316587,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757091606773,
			"link": null,
			"locked": false
		},
		{
			"id": "tw7bk7z6",
			"type": "text",
			"x": 1216.7104294779383,
			"y": -360.92138136335905,
			"width": 231,
			"height": 25,
			"angle": 0,
			"strokeColor": "#706e69",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"groupIds": [
				"VypEpRcJQ4FCUz3XfXKyk"
			],
			"frameId": null,
			"index": "b1I",
			"roundness": null,
			"seed": 1086147909,
			"version": 434,
			"versionNonce": 1442675211,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757091606773,
			"link": null,
			"locked": false,
			"text": "md notes with no tags",
			"rawText": "md notes with no tags",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "md notes with no tags",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "-MjtfI-d2WtjiQMZOocUp",
			"type": "rectangle",
			"x": 905.3682669770494,
			"y": -367.10553303174015,
			"width": 40.72525037073906,
			"height": 33.8100213670333,
			"angle": 0,
			"strokeColor": "#bbb",
			"backgroundColor": "#ffffff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [
				"VypEpRcJQ4FCUz3XfXKyk"
			],
			"frameId": null,
			"index": "b1J",
			"roundness": {
				"type": 3
			},
			"seed": 287710283,
			"version": 984,
			"versionNonce": 1677197483,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757091606773,
			"link": null,
			"locked": false
		},
		{
			"id": "BniK8pNL",
			"type": "text",
			"x": 959.605283225811,
			"y": -360.92138136335905,
			"width": 198,
			"height": 25,
			"angle": 0,
			"strokeColor": "#706e69",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"groupIds": [
				"VypEpRcJQ4FCUz3XfXKyk"
			],
			"frameId": null,
			"index": "b1K",
			"roundness": null,
			"seed": 898915819,
			"version": 465,
			"versionNonce": 1781052235,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757091606773,
			"link": null,
			"locked": false,
			"text": "md notes with tags",
			"rawText": "md notes with tags",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "md notes with tags",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "swq9jXiK",
			"type": "text",
			"x": 608.5930584222508,
			"y": -189.60872204161842,
			"width": 33,
			"height": 25,
			"angle": 0,
			"strokeColor": "#bbb",
			"backgroundColor": "#ffffff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b1L",
			"roundness": null,
			"seed": 1060464632,
			"version": 6,
			"versionNonce": 110493320,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1757322216037,
			"link": null,
			"locked": false,
			"text": "tse",
			"rawText": "tse",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "tse",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "zVXbck4k",
			"type": "text",
			"x": -48.91738620963861,
			"y": -340.8102619433606,
			"width": 33,
			"height": 25,
			"angle": 0,
			"strokeColor": "#bbb",
			"backgroundColor": "#ffffff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b1M",
			"roundness": null,
			"seed": 92097455,
			"version": 6,
			"versionNonce": 1760948769,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1757621421130,
			"link": null,
			"locked": false,
			"text": "tes",
			"rawText": "tes",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "tes",
			"autoResize": true,
			"lineHeight": 1.25
		},
		{
			"id": "pWbNty4b",
			"type": "text",
			"x": -48.425451149479954,
			"y": -366.12514566206926,
			"width": 11,
			"height": 25,
			"angle": 0,
			"strokeColor": "#bbb",
			"backgroundColor": "#ffffff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"index": "b1N",
			"roundness": null,
			"seed": 1592172001,
			"version": 3,
			"versionNonce": 502225313,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1757621422925,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 8,
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "",
			"autoResize": true,
			"lineHeight": 1.25
		}
	],
	"appState": {
		"theme": "dark",
		"viewBackgroundColor": "#f5faff",
		"currentItemStrokeColor": "#bbb",
		"currentItemBackgroundColor": "#ffffff",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 2,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 2,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 8,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "center",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "triangle_outline",
		"currentItemArrowType": "round",
		"currentItemFrameRole": null,
		"scrollX": 335.4825054455769,
		"scrollY": 559.1929245420454,
		"zoom": {
			"value": 2.09363
		},
		"currentItemRoundness": "sharp",
		"gridSize": 20,
		"gridStep": 5,
		"gridModeEnabled": true,
		"gridColor": {
			"Bold": "rgba(168, 212, 255, 0.5)",
			"Regular": "rgba(194, 224, 255, 0.5)"
		},
		"currentStrokeOptions": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true,
			"markerName": true,
			"markerEnabled": true
		},
		"objectsSnapModeEnabled": false,
		"activeTool": {
			"type": "selection",
			"customType": null,
			"locked": false,
			"fromSelection": false,
			"lastActiveTool": null
		}
	},
	"files": {}
}
```
%%