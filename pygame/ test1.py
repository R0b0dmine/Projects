import pgzrun
import math
WIDTH = 800
HEIGHT = 600
def axis():
    i=0
    o=0
    screen.draw.line((400,600),(400,0),'white')
    screen.draw.line((0,300),(800,300),'white')
    for x in range(80):
        screen.draw.line((i,298),(i,302),'white') 
        i=i+10
    for x in range(60):
        screen.draw.line((402,o),(398,o),'white')
        o=o+10
def grid():
    k=0
    l=0
    for x in range(80):
        screen.draw.line((k,0),(k,600),(20,20,20)) 
        k=k+10
    for x in range(60):
        screen.draw.line((0,l),(800,l),(20,20,20))
        l=l+10
def drawPointXY(x,y,color):
    posx=x*10+400
    posy=300-y*10
    screen.draw.line((posx,posy),(posx,posy),color)
            


   
   
def draw():
    screen.clear()
    grid()
    axis()
    for x in range(-4000,4000,1):
        X=(x/100)
        Y=X**2+3*X
        drawPointXY(X,Y,'green')
        
pgzrun.go()
