ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:leather'})
    event.shapeless('kubejs:board', ['2x minecraft:stick']).id('kubejs:board')
    event.shapeless('3x kubejs:cactus_prickle', ['minecraft:cactus']).id('kubejs:cactus_prickle')
    event.shapeless('2x kubejs:nailedboard', ['2x kubejs:cactus_prickle', '2x kubejs:board']).id('kubejs:nailedboard')
    event.shapeless('minecraft:oak_planks', ['4x kubejs:nailedboard']).id('minecraft:oak_planks')
    event.shapeless('minecraft:leather', ['2x minecraft:rabbit_hide'])
    event.shapeless('4x minecraft:oak_planks', ['minecraft:oak_log'])
    event.shaped(
        Item.of('desert_mining:sandy_hand_sieve', 1),
        [
            ' A ',
            'A A',
            ' A '
        ],
        {
            A: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:leather', 1),
        [
            'A A',
            'AAA',
            'A A'
        ],
        {
            A: 'minecraft:string'
        }
    )
})