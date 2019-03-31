import pgzrun



WIDTH = 800
HEIGHT = 600
def triangle(w1,w2,w3):
    
    
    screen.draw.line((w1),(w2),'white')
    screen.draw.line((w2),(w3),'white')
    screen.draw.line((w3),(w1),'white')

def draw():
    screen.clear()
    p1=(400,300)
    p2=(230,230)
    p3=(400,430)
    screen.draw.circle(p1,30, 'white')
    screen.draw.circle(p2,30,'white')
    screen.draw.circle(p3,30,'white')
    triangle(p1,p2,p3)
    triangles()

def triangles():
    k01=100
    k02=100
    k03=200
    k04=100
    k05=100
    k06=50
    screen.clear()
    for x in range(5):
        
        k1=(k01,k02)
        k2=(k03,k04)
        k3=(k05,k06)
        screen.draw.line(k1,k2,'white')
        screen.draw.line(k2,k3,'white')
        screen.draw.line(k3,k1,'white')
        
        k01=k01+100
        k02=k02
        k03=k03+100
        k04=k04
        k05=k05+100
        k06=k06
pgzrun.go()