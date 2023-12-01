song_1 = ""
song_2 = ""

function preload() 
{
    song_1 = loadSong("harry potter.mp3")
    song_2 = loadSong("peter pan.mp3")
}
function setup() 
{
    canvas = createCanvas(500, 460)
    canvas.position(485, 200)

    video = createCapture(VIDEO)
    video.hide()
}
function draw() 
{
    image(video, 0, 0, 500, 460)
}