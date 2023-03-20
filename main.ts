namespace SpriteKind {
    export const StatusBar = SpriteKind.create()
    export const Text = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setCurrentTilemap(tileMapList.removeAt(randint(0, tileMapList.length - 1)))
    preScore = time + preScore
    mySprite.setPosition(18, 34)
    info.startCountdown(preScore)
    info.setScore(preScore)
    if (tileMapList.length < 1) {
        game.over(true)
    }
})
let preScore = 0
let time = 0
let tileMapList: tiles.TileMapData[] = []
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`mushroom`, SpriteKind.Player)
mySprite.fx = 12.5
mySprite.fy = 12.5
mySprite.setPosition(18, 34)
mySprite.setStayInScreen(true)
tileMapList = [
tilemap`level0`,
tilemap`level1`,
tilemap`level8`,
tilemap`level10`,
tilemap`level3`,
tilemap`level4`
]
scene.cameraFollowSprite(mySprite)
time = 45
preScore = 35
tiles.setCurrentTilemap(tileMapList.removeAt(randint(0, tileMapList.length - 1)))
info.startCountdown(35)
forever(function () {
    pause(500)
    preScore += -1
    pause(500)
})
forever(function () {
    mySprite.ax = controller.dx() * 15
    mySprite.ay = controller.dy() * 15
    pause(10)
})
