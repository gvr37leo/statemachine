/// <reference path="node_modules/vectorx/vector.ts" />
/// <reference path="node_modules/utilsx/utils.ts" />
/// <reference path="node_modules/eventsystemx/EventSystem.ts" />

/// <reference path="table.ts" />
/// <reference path="statemachine.ts" />

var sm = new StateMachine()

var mainmenu = sm.states.add(new State())
var settings = sm.states.add(new State())
var game = sm.states.add(new State())
var deathscreen = sm.states.add(new State())

sm.edges.add(new Edge(mainmenu.id,game.id))
sm.edges.add(new Edge(mainmenu.id,settings.id))
sm.edges.add(new Edge(game.id,deathscreen.id))
sm.edges.add(new Edge(deathscreen.id,mainmenu.id))

sm.currentstateid = mainmenu.id

loop(dt => {
    dt /= 1000

    sm.update(dt)
})