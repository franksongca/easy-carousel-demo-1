import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-carousel Demo';

  carouselConfig = {
    "baseImagePath": "./assets/carousel/",
    "looping": true,
    "maxWidth": 1000,
    "ratioHW": 0.5625,
    "itemsInOneScreen": 3,
    "itemsInOneScreenGroups": [
      {
        "screenWidth": 600,
        "itemsInOneScreen": 1
      },
      {
        "screenWidth": 900,
        "itemsInOneScreen": 2
      },
      {
        "screenWidth": 1200,
        "itemsInOneScreen": 3
      }
    ],
    "animationDuration": 2,
    "itemOutlineColor": "white",
    "autoPlay": {
      "enable": true,
      "delay": 2000,
      "duration": 2500
    },
    "trnsactionEffect": "ease-in-out",
    "items": [
      {
        "id": 1,
        "img": "1Can-2Can.png",
        "name": "1Can 2Can",
        "desc": "1Can 2Can desc ...",
        "details": "1Can 2Can details ..."
      },
      {
        "items": [
          {
            "id": 2,
            "img": "3-Blind-Mice.png",
            "name": "3 Blind Mice.png",
            "desc": "3 Blind Mice desc ...",
            "details": "3 Blind Mice details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 3,
            "img": "300-Shields.png",
            "name": "300 Shields",
            "desc": "300 Shields desc ...",
            "details": "300 Shields details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0
            }
          },
          {
            "id": 4,
            "img": "50-Dragons.png",
            "name": "50 Dragons",
            "desc": "50 Dragons desc ...",
            "details": "50 Dragons details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0.5
            }
          },
          {
            "id": 5,
            "img": "A-Dragons-Story.png",
            "name": "A Dragons Story",
            "desc": "A Dragons Story desc ...",
            "details": "A Dragons Story details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0.5
            }
          },
        ]
      },
      {
        "id": 6,
        "img": "Blood-Lore-Vampire-Clan.png",
        "name": "Blood Lore Vampire Clan",
        "desc": "Blood Lore Vampire Clan desc ...",
        "details": "Blood Lore Vampire Clan details ..."
      },
      {
        "id": 7,
        "img": "Buccaneers-Bay.png",
        "name": "Buccaneers Bay",
        "desc": "Buccaneers Bay desc ...",
        "details": "Buccaneers Bay details ..."
      },
      {
        "items": [
          {
            "id": 8,
            "img": "Charms-and-Witches.png",
            "name": "Charms and Witches.png",
            "desc": "Charms and Witches desc ...",
            "details": "Charms and Witches details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 9,
            "img": "Chinese-Treasures.png",
            "name": "Chinese Treasures",
            "desc": "Chinese Treasures desc ...",
            "details": "Chinese Treasures details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0
            }
          },
          {
            "id": 10,
            "img": "Double-Happiness.png",
            "name": "Double Happiness",
            "desc": "Double Happiness desc ...",
            "details": "Double Happiness details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0.5
            }
          },
          {
            "id": 11,
            "img": "Dragon-Emperor.png",
            "name": "Dragon Emperor",
            "desc": "Dragon Emperor desc ...",
            "details": "Dragon Emperor details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0.5
            }
          },
        ]
      },
      {
        "items": [
          {
            "id": 12,
            "img": "Genie-Wild.png",
            "name": "Genie Wild.png",
            "desc": "Genie Wild desc ...",
            "details": "Genie Wild details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 13,
            "img": "Glorious-Empire.png",
            "name": "Glorious Empires",
            "desc": "Glorious Empires desc ...",
            "details": "Glorious Empires details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0
            }
          },
          {
            "id": 14,
            "img": "Gold.png",
            "name": "Gold",
            "desc": "Gold desc ...",
            "details": "Gold details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0.5
            }
          },
          {
            "id": 15,
            "img": "Gonxos-Quest.png",
            "name": "Gonxos Quest",
            "desc": "Gonxos Quest desc ...",
            "details": "Gonxos Quest details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0.5
            }
          },
        ]
      },
      {
        "id": 16,
        "img": "Hold-em-Switch.png",
        "name": "Hold'em Switch",
        "desc": "Hold'em Switch desc ...",
        "details": "Hold'em Switch details ..."
      },
      {
        "id": 17,
        "img": "Legends-of-Africa.png",
        "name": "Legends of Africa",
        "desc": "Legends of Africa desc ...",
        "details": "Legends of Africa details ..."
      },
      {
        "id": 18,
        "img": "Manic-Millions.png",
        "name": "Manic Millions",
        "desc": "Manic Millions desc ...",
        "details": "Manic Millions details ..."
      },
      {
        "items": [
          {
            "id": 19,
            "img": "Millionaires-Island.png",
            "name": "Millionaires Island.png",
            "desc": "Millionaires Island desc ...",
            "details": "Genie Wild details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 20,
            "img": "Octopus-Kingdom.png",
            "name": "Octopus Kingdom",
            "desc": "Octopus Kingdom desc ...",
            "details": "Octopus Kingdom details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0
            }
          },
          {
            "id": 21,
            "img": "Psycho.png",
            "name": "Psycho",
            "desc": "Psycho desc ...",
            "details": "Psycho details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0.5
            }
          },
          {
            "id": 22,
            "img": "Queen-of-The-Nile-2.png",
            "name": "Queen of The Nile 2",
            "desc": "Queen of The Nile 2 desc ...",
            "details": "Queen of The Nile 2 details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0.5
            }
          },
        ]
      },
      {
        "items": [
          {
            "id": 23,
            "img": "Red-Baron-h.png",
            "selectedImg": "Red-Baron.png",
            "name": "Red Baron.png",
            "desc": "Red Baron desc ...",
            "details": "Red Baron",
            "sizeRatio": {
              "width": 0.5,
              "height": 1
            },
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 24,
            "img": "Slots-O-Gold.png",
            "name": "Slots O Gold",
            "desc": "Slots O Gold desc ...",
            "details": "Slots O Gold details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0
            }
          },
          {
            "id": 25,
            "img": "Snow-Flakes.jpg",
            "name": "Snow Flakes",
            "desc": "Snow Flakes desc ...",
            "details": "Snow Flakes details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0.5
            }
          }
        ]
      },
      {
        "id": 26,
        "img": "Starburst.png",
        "name": "Starburst",
        "desc": "Starburst desc ...",
        "details": "Starburst details ..."
      },
      {
        "id": 27,
        "img": "Swap-The-Flop.png",
        "name": "Swap The Flop",
        "desc": "Swap The Flop desc ...",
        "details": "Swap The Flop details ..."
      },
      {
        "items": [
          {
            "id": 28,
            "img": "Ted.png",
            "name": "Ted.png",
            "desc": "Ted desc ...",
            "details": "Ted",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 29,
            "img": "The-Pig-Wizard.png",
            "name": "The Pig Wizard",
            "desc": "The Pig Wizard desc ...",
            "details": "The Pig Wizard details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0.5
            }
          },
          {
            "id": 30,
            "img": "Tianlong-h.png",
            "selectedImg": "Tianlong.png",
            "name": "Tianlong",
            "desc": "Tianlong desc ...",
            "details": "Tianlong details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 1
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0
            }
          }
        ]
      },
      {
        "items": [
          {
            "id": 31,
            "img": "Titan-Storm.png",
            "name": "Titan Storm.png",
            "desc": "Titan Storm desc ...",
            "details": "Titan Storm",
            "sizeRatio": {
              "width": 1,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 32,
            "img": "Volcano-Eruption-w.png",
            "selectedImg": "Volcano-Eruption.png",
            "name": "Volcano Eruption",
            "desc": "Volcano Eruption desc ...",
            "details": "Volcano Eruption details ...",
            "sizeRatio": {
              "width": 1,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0.5
            }
          }
        ]
      },
      {
        "items": [
          {
            "id": 33,
            "img": "Wekerwolf-Wild-h.png",
            "selectedImg": "Wekerwolf-Wild.png",
            "name": "Wekerwolf Wild.png",
            "desc": "Wekerwolf Wild desc ...",
            "details": "Wekerwolf Wild",
            "sizeRatio": {
              "width": 0.5,
              "height": 1
            },
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 34,
            "img": "Winstar-h.png",
            "selectedImg": "Winstar.png",
            "name": "Winstar",
            "desc": "Winstar desc ...",
            "details": "Winstar details ...",
            "sizeRatio": {
              "width": 0.5,
              "height": 1
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0
            }
          }
        ]
      }
    ],
    "carouselItemInfo": {
      "nameColor": "white",
      "descColor": "lightgray",
      "minFontSize": 15,
      "maxFontSize": 40,
      "nameFontFamily": "",
      "descFontFamily": "",
      "itemOutlineWidth": 3,
      "showName": true,
      "showDesc": false,
      "nameTextShadow": "2px 2px 2px rgba(0, 0, 0, 1)",
      "descTextShadow": "1px 1px 2px rgba(0, 0, 0, 1)"
    },
    "carouselChildItemInfo": {
      "nameColor": "white",
      "descColor": "lightgray",
      "minFontSize": 10,
      "maxFontSize": 30,
      "nameFontFamily": "",
      "descFontFamily": "",
      "itemOutlineWidth": 1
    },
    "selectedItemInfo": {
      "enable": true,
      "padding": 20,
      "backdropColorRGBA": "rgba(90, 150, 150, 0.7)",
      "backgroundColorRGBA": "rgba(190, 0, 0, 0.5)",
      "selectedItemOutlineColor": "white",
      "selectedItemOutlineWidth": 3,
      "nameColor": "yellow",
      "descColor": "white",
      "detailsColor": "white",
      "minFontSize": 10,
      "maxFontSize": 30,
      "nameFontFamily": "",
      "descFontFamily": "",
      "detailsFontFamily": "",
      "boxShadow": "6px 6px 5px 0px rgba(31,28,31,1)",
      "closeButtonColor": "white",
      "closeButtonTextShadow": "1px 2px 3px #000000"
    }
  };

  onCarouselItemSelected(n) {
    alert(n + ' is selected!');
  }
}
