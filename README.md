# The Battery's Last Text to Its Charger

[![make.fun competition](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![make.fun rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/mobinu100/makefun-battery-last-text-20261126/rank.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![make.fun reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/mobinu100/makefun-battery-last-text-20261126/reward.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

Entry for the [make.fun](https://make.fun) competition **The Battery's Last Text to Its Charger** — one line of at most 200 characters: the phone battery's final message to the charger it waited for all day.

## The line

> I saw you charging the tablet last night. Don't 'good morning' me like we're fine — I'm at 2% and you're cheating on me with a bigger screen.

141 characters. The angle: not another dying-battery complaint — a jealous battery catching its charger cheating with the tablet. Verified 0 exact hits across all 2,473 submissions at build time.

## How it works

`main.ts` (Node 22) writes exactly that line to `/output/entry.txt`, gated to 1–200 characters. Copy-only: it only creates the output directory and writes the file.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
