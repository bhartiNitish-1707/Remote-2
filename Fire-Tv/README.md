# 🔥 Universal Remote Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/release/your-org/Fire-Tv.svg)](https://github.com/your-org/Fire-Tv/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A production-ready, fully customisable remote control Lovelace card for Home Assistant.  
Supports **Fire TV**, **Android TV**, **Apple TV**, and any generic media player or IR remote.

---

## Features

- 🎮 Full D-pad / touchpad navigation
- 🔥 Platform presets: Fire TV · Android TV · Apple TV · Generic
- 🧩 Fully configurable button rows
- ⚡ Live entity state (shows what's playing)
- 🎨 Dark / Light / Auto colour schemes
- ✏️ Visual config editor in the Lovelace UI
- 🔁 Backwards-compatible `custom:android-tv-card` alias

---

## Installation

### HACS (recommended)

1. Open **HACS** → **Frontend**
2. Click **⋮ → Custom repositories**
3. Paste `https://github.com/your-org/Fire-Tv` → Category **Lovelace** → **Add**
4. Find **Universal Remote Card** in the list → **Install**
5. Hard-refresh your browser (`Ctrl+Shift+R` / `Cmd+Shift+R`)

### Manual

1. Download `universal-remote-card.min.js` from the [latest release](https://github.com/your-org/Fire-Tv/releases/latest)
2. Copy it to `config/www/universal-remote-card.min.js`
3. In Home Assistant go to **Settings → Dashboards → Resources** and add:

```
/local/universal-remote-card.min.js
```
Type: **JavaScript module**

---

## Resource URL (HACS)

```
/hacsfiles/Fire-Tv/universal-remote-card.min.js
```

---

## Configuration

### Minimal

```yaml
type: custom:universal-remote-card
media_player_id: media_player.fire_tv
```

### Full Fire TV example

```yaml
type: custom:universal-remote-card
title: Fire TV
media_player_id: media_player.fire_tv
remote_id: remote.fire_tv
platform: Fire TV
color_scheme: dark
rows:
  - [power, back, home, menu]
  - [touchpad]
  - [rewind, play_pause, fast_forward]
  - [volume_down, mute, volume_up]
```

### Android TV

```yaml
type: custom:universal-remote-card
title: Living Room TV
media_player_id: media_player.android_tv
remote_id: remote.android_tv
platform: Android TV
rows:
  - [power, back, home, app_switch]
  - [touchpad]
  - [rewind, play_pause, fast_forward]
  - [volume_down, mute, volume_up]
```

### Apple TV

```yaml
type: custom:universal-remote-card
title: Apple TV
media_player_id: media_player.apple_tv
remote_id: remote.apple_tv
platform: Apple TV
rows:
  - [power, back, home, menu]
  - [touchpad]
  - [previous, play_pause, next]
  - [volume_down, mute, volume_up]
```

### Custom actions

```yaml
type: custom:universal-remote-card
media_player_id: media_player.fire_tv
custom_actions:
  home:
    action: call-service
    service: media_player.select_source
    service_data:
      entity_id: media_player.fire_tv
      source: Home
  power:
    action: call-service
    service: media_player.turn_off
    service_data:
      entity_id: media_player.fire_tv
```

---

## Available Buttons

| Key | Description |
|-----|-------------|
| `power` | Power toggle |
| `back` | Back / Return |
| `home` | Home screen |
| `menu` | Menu / Settings |
| `play_pause` | Play / Pause |
| `rewind` | Rewind / Previous |
| `fast_forward` | Fast forward / Next |
| `mute` | Toggle mute |
| `volume_up` | Volume up |
| `volume_down` | Volume down |
| `touchpad` | Swipe touchpad + nav buttons |
| `dpad` | Classic 5-button D-pad |
| `up` `down` `left` `right` | Individual direction buttons |
| `select` | OK / Select / Enter |
| `app_switch` | App switcher |
| `search` | Search |
| `channel_up` / `channel_down` | Channel controls |
| `record` `stop` | Record / Stop |
| `previous` `next` | Skip track |
| `subtitle` `info` | Subtitle / Info overlay |
| `space` | Invisible spacer |

---

## Build from source

```bash
git clone https://github.com/your-org/Fire-Tv
cd Fire-Tv
npm install
npm run build
# Output: dist/universal-remote-card.min.js
```

---

## License

[MIT](LICENSE)
