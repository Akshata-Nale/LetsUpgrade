let quot = [`"Imagination is more important than knowledge."<br>
     -Albert Einstein (1879-1955)`,

`"It does not matter how slowly you go as long as you do not stop." <br>                                                       
    -Confucius (551 BC l-479 BC)`,

`"All our dreams can come true, if we have the courage to pursue them."  <br>                                              
    -Walt Disney (1901-1966)`,

`"I never dreamed about success, I worked for it."   <br>        
     -Estée Lauder (1908-2004)`,

`"Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult."   <br>           
     -Avul Pacir Jainulabidin Abdul Kalam (1931-2015)`,
 
`"There is nothing more powerful in the world than the idea that came in time."     <br>                                     
     -Victor Hugo (1802-1855)`,
 
`"When we close ourselves off, we're not just closing ourselves off to other people, we're closing ourselves off from ourselves and impeding ourselves. When you open up, you allow yourself to be who you are."<br>
     -Amy Cuddy (b.1972)`,

`"We are what we repeatedly do. Excellence, then, is not an act, but a habit."<br>
     -Aristotle (384 BC-322 BC)`,

`"Never bend your head. Always hold it high. Look the world straight in the eye. "<br>
     -Helen Keller (1880-1968)`,

`"Begin to be now what you will be hereafter."<br>
     -William James (1842-1910)`,

`"Setting goals is the first step in turning the invisible into the visible."<br>
     -Tony Robbins (b.1960)`,

`"You can’t give up! When you give up, you're like everybody else!"<br>
     -Chris Evert (b.1954)`,

`"He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.”<br>
     -Pablo Picasso (1881-1973)`,

`"When you want something, all the universe conspires in helping you to achieve it."<br>
     -Paulo Coelho (b.1979)`,

`"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. "<br>
     -Nelson Mandela (1918-2013)`,

`"There is no easy way from the earth to the stars."<br>
     -Seneca (4 BC-65 AD)`,
 
`"Victory is not always winning the battle...but rising every time you fall."<br>
     -Napoleon Bonaparte (1769-1821)`,
 
`"Reality is created by the mind, we can change our reality by changing our mind. "<br>
     -Plato (427 BC - 347 BC)`,

`“The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.”<br>
     -Socrates (469 BC-399 BC)`,

`"It is not in the stars to hold our destiny but in ourselves.”<br>
     -William Shakespeare (1564-1616)`,

`“You should never let your fears prevent you from doing what you know is right.”<br>
     -Aung San Suu Kyi (b.1945)`,

`"Always keep your eyes open. Keep watching. Because whatever you see can inspire you.”  <br>
     -Grace Coddington (b.1941)`,

`"Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny."<br>
     -Lao Tzu (604 BC – 531 BC)`,

`“You can never cross the ocean unless you have the courage to lose sight of the shore."<br>
     -Christopher Columbus (1451-1506)`,

`"It is our choices that show what we truly are, far more than our abilities.”<br>
     -J.K. Rowling (b.1965)`,

`"Everyone thinks of changing the world, but no one thinks of changing himself.”<br>
     -Lev Nikolaevich Tolstoy (1828-1910)`,

`"The most difficult thing is the decision to act, the rest is merely tenacity."<br>
     -Amelia Earhart (1897-1937)`,

`“Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.”<br>
     -Earl Nightingale (1921-1989)`,

`"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.”<br>
     -Antoine de Saint-Exupéry (1900-1944)`,

`“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.”<br>
     -Mark Twain (1835-1910)`,

`"One is not born a genius, one becomes a genius”<br>
     -Simone de Beauvoir (1908-1986)`,

`"The limits of the possible can only be defined by going beyond them into the impossible."<br>
     -Arthur C. Clarke (1917-2008)`,

`"Shoot for the moon. Even if you miss, you'll land among the stars. "<br>
     -Les Brown (b.1945)`,

`“Keep your face always toward the sunshine—and shadows will fall behind you.”<br>
     -Walt Whitman (1819-1892)`,

`“What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.”<br>
     -Ralph Waldo Emerson (1803-1882)`,
    ]

    function start(){
        var randomNumber = Math.floor(Math.random() * (quot.length));
        document.getElementById('quote').innerHTML = quot[randomNumber];
    }



