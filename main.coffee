@kid = (el, opts = {}) ->
  el.kid = { dwells: [], flights: [], all: [] }

  el.kid.clear = -> [@dwells, @flights, @all, @lastStrokedAt] = [[],[], [], null]

  el.addEventListener 'keydown', ->
    el.kid.flights.push [String.fromCharCode(event.keyCode), Date.now() -
      (el.kid.lastStrokedAt || Date.now())]

    el.kid.all.push [String.fromCharCode(event.keyCode) + 'Dw', Date.now() -
      (el.kid.lastStrokedAt || Date.now())]

    el.kid.lastStrokedAt = Date.now()

  el.addEventListener 'keyup', ->
    el.kid.dwells.push [String.fromCharCode(event.keyCode), Date.now() -
      (el.kid.lastStrokedAt || Date.now())]

    el.kid.all.push [String.fromCharCode(event.keyCode) + 'Up', Date.now() -
      (el.kid.lastStrokedAt || Date.now())]


    el.kid.lastStrokedAt = Date.now()

