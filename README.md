## Topics
  
1. [ABOUT THE PROJECT](#about-the-project) 
2. [DOCUMENTATION](#documentation) 
3. [SEARCHS AND COPYRIGHT](#searchs-and-copyright)

##  ABOUT THE PROJECT 😽🧩

Puzzleplay is a simple game made with HTML, CSS and JS, without any framework. The objective of the game is to complete the puzzle (in the square) with the pieces in the correct order.
The game is friend responsiveness to diferent sizes (*812 px, 1024px and 1920 px*)

With the progress in my studies, I started to make projets that chalenge me, that make me go and learn about a new function, event, our method, to train my web programing skills. Because of that, I decided to work with the specific **drag** eventListeners, to understand how the navigator can recognize itens that are being draged, to undertand more about eventListeners, and, off course, resolve a small puzzle (I really love puzzles :P)

The ideia of that litle game came to me when I was playing with a 1000 pieces puzzle, with one make me thing like a explosion on my mind

	" Can I make a web puzzle? # 💥# 💥# 💥"	

>[!TIP]
>The program have cool features, like:
>1.  Increase the resolution image with double click
>2. Change the position of the piece if droped in the piece area
>3. A simple message that appears when the puzzle is complete

##  DOCUMENTATION

> [!note] 
The HTML and CSS are really simple in this project, but, the `data-position` in HTML is **extremely** important for the page, since the JS in the frontend will be used to fit the pieces together

### FUNCTIONS

> ***dependence( )*** --> That event's is extremely important, because the event need to alternate from the default event
> 
> ***createPieces( )*** --> Function that create the pieces and place then
> 
> ***fit pieces*** --> That function will check and, if true, will add the piece and handle with remove of classes, but, if not, will remove "is-dragging" class from the piece. 
> The way used to check if the piece have been dropped in the right place is simple, the program will acess the elemet where the piece have been droped (with the event), and check the `data-position `number, if is equals the piece `data-position` it will fit in
> 
> ***push pieces*** --> That function is called when the piece is pushed inside the area where pieces are randomly positioned. 
> That function will check the position where the mouse (our cursor, whatever) was when the piece was droped, then, will change the position in line, adjusting the height and width
> 
>***incress reference image*** --> Used to visualise the resolution image more clearly. 
>That function basically will add the class `displayAnimation` to the image grown. To go back to the normal size, double click in the image to add  the class `recallAnimation`, that will re-transform the image size
>
>***generateNumber*** --> Generate a random number based in two number in the param. Is used to generate a random position to the pieces 
>
>***puzzleResolveVerify*** --> Event that change the array "puzzleState" and, if all true, return a alert and finish the game
>That function will use the `data-position` to know the index that have to change the value to true
>
>***placePieces*** --> Will check the size of the screen and put the pieces in the right area 
>That functions is extremely important because of the responsivity of the page, with that, pieces will be generated in the right place
>
>***dependence*** --> That event's is extremely important. Some HTML tags need to have their events changed from default to the drag event works

## SEARCHS AND COPYRIGHT

The [cat image is from](https://www.freepik.com/free-photo/fluffy-kitten-sitting-grass-staring-sunset-playful-generated-by-artificial-intelligence_86175654.htm#query=beautiful%20cat&position=19&from_view=keyword&track=ais&uuid=0fe78b9b-b69e-426b-9785-7411cc3b28ea) and I used the [IMGonline.com.ua](https://www.imgonline.com.ua/eng/cut-photo-into-pieces.php) to cut the images in 15 pieces

### COPYRIGHT ©Natanael Ribeiro

