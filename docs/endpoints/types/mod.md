---
outline: deep
---

# Mod

## Available mods

| Name   | Description     |
|--------|-----------------|
| `EZ`   | Easy            |
| `NF`   | No Fail         |
| `HT`   | Half Time       |
| `HR`   | Hard Rock       |
| `SD`   | Sudden Death    |
| `PF`   | Perfect         |
| `DT`   | Double Time     |
| `NC`   | Nightcore       |
| `HD`   | Hidden          |
| `FI`   | Fade In         |
| `FL`   | Flashlight      |
| `RL`   | Relax           |
| `AP`   | Autopilot       |
| `SO`   | Spun Out        |
| `xK`   | Key Amount      |
| `CP`   | Co-op           |
| `MR`   | Mirror          |
| `RD`   | Random          |
| `AT`   | Auto            |
| `CM`   | Cinema          |
| `SV2`  | ScoreV2         |
| `TP`   | Target Practice |

## Snippet

::: code-group

```js [enum.gs]
// Mod Enum
const Mod = {
  Easy: 'EZ',
  No_Fail: 'NF',
  Half_Time: 'HT',
  Hard_Rock: 'HR',
  Sudden_Death: 'SD',
  Perfect: 'PF',
  Double_Time: 'DT',
  Nightcore: 'NC',
  Hidden: 'HD',
  Fade_In: 'FI',
  Flashlight: 'FL',
  Relax: 'RL',
  Autopilot: 'AP',
  Spun_Out: 'SO',
  Key_1: '1K',
  Key_2: '2K',
  Key_3: '3K',
  Key_4: '4K',
  Key_5: '5K',
  Key_6: '6K',
  Key_7: '7K',
  Key_8: '8K',
  Key_9: '9K',
  Co_Op: 'CP',
  Mirror: 'MR',
  Random: 'RD',
  Auto: 'AT',
  Cinema: 'CM',
  ScoreV2: 'SV2',
  Target_Practice: 'TP'
}

console.log(Mod.Hard_Rock) // HR
```

:::
Can also be found in [Snippets/Types.gs](../../snippets/snippets/types)