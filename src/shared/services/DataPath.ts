export const enum DataPathIds {
  Skill = 0,
  SkillMain = 1,
  Stats = 2,
  CharacterStats = 3,
  Glossary = 4,
  Equipment = 5,
  Crystal = 6,
  Enchant = 7,
  Registlet = 8,
  Potion = 9,
  Quest = 10,
}

function DataPath(id: DataPathIds): string {
  switch (id) {
    case DataPathIds.Skill:
      return 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=1606413261&single=true&output=csv&range=A:Q'
    case DataPathIds.SkillMain:
      return 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=1524815227&single=true&output=csv&range=A:D'
    case DataPathIds.Stats:
      return 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=136236811&single=true&output=csv&range=A:F'
    case DataPathIds.CharacterStats:
      return 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=0&single=true&output=csv&range=A:I'
    case DataPathIds.Glossary:
      return 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=1544019839&single=true&output=csv&range=A:C'
    case DataPathIds.Equipment:
      return 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=730132370&single=true&output=csv&range=A:I'
    case DataPathIds.Crystal:
      return 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=255264047&single=true&output=csv&range=A:E'
    case DataPathIds.Enchant:
      return 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=72560230&single=true&output=csv&range=A:O'
    case DataPathIds.Registlet:
      return 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=821692676&single=true&output=csv&range=A:I'
    case DataPathIds.Potion:
      return 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=1541872573&single=true&output=csv&range=A:E'
    case DataPathIds.Quest:
      return 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=583329987&single=true&output=csv&range=A:I'
  }
}

function DataPathLang(id: DataPathIds): (string | null)[] {
  /**
   * The order of languages: [en, zh_tw, ja, zh_cn]
   */
  switch (id) {
    case DataPathIds.Skill:
      return [
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=1606413261&single=true&output=csv&range=R:R',
        null,
        null,
        null,
      ]
    case DataPathIds.SkillMain:
      return [
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=1524815227&single=true&output=csv&range=F:F',
        null,
        null,
        null,
      ]
    case DataPathIds.Stats:
      return [
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=136236811&single=true&output=csv&range=B:C',
        null,
        null,
        null,
      ]
    case DataPathIds.CharacterStats:
      return [null, null, null, null]
    case DataPathIds.Glossary:
      return [
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=1544019839&single=true&output=csv&range=D:E',
        null,
        null,
        null,
      ]
    case DataPathIds.Equipment:
      return [
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjr3VK1N9hY3HLHvSiiunb6twQ7tGBdI2cZVmDexnOR4Jn7evfmRRbdsdLYjc54_EcCPN_YoZMfjMn/pub?gid=730132370&single=true&output=csv&range=J:J',
        null,
        null,
        null,
      ]
  }
  return []
}

export { DataPath, DataPathLang }
