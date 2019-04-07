import pgzrun
alien = Actor('alien')
alien.pos = 250, 250

WIDTH = 500
HEIGHT = 500

def draw():
    screen.clear()
    alien.draw()
def update():
    if keyboard.left:
        alien.x -= 20
    elif keyboard.right:
        alien.x += 20
    if keyboard.up:
        alien.y -= 20
    elif keyboard.down:
        alien.y += 20
    if alien.y - 50 > HEIGHT:
        alien.pos=alien.x,-50
    
   
pgzrun.go()