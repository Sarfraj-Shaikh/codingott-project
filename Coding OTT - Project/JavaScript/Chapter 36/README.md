# Chapter 36

# JavaScript `setInterval` Practice Tasks

## 1) Simple Digital Clock

### Task:
- Ek `<div>` banaiye jisme **current time** show ho.
- `setInterval()` ka use karke **har 1 second** time update karo.

### Requirements:
- Time format readable ho (HH:MM:SS).

### Extra:
- Ek **Stop button** add karo jo `clearInterval()` call karke clock update stop kar de.


---

## 2) Countdown Timer

### Task:
- Ek number se countdown start karo (example: **10**).
- `setInterval()` ka use karke **har second number 1 se decrease** karo.

### Requirements:
- Countdown UI pe display ho.
- Jaise hi number **0** ho:
  - `clearInterval()` call ho
  - `alert("Time’s up!")` show ho

### Extra:
- Restart button add karo jo timer ko wapas start kare.


---

## 3) Automatic Color Changer

### Task:
- Ek `<div>` create karo.
- `setInterval()` ka use karke **har 1-2 second** me div ka background color change karo.

### Requirements:
- Random colors generate ho (RGB ya hex).

### Extra:
- **Start button**: interval start kare  
- **Stop button**: `clearInterval()` se interval stop kare


---

## 4) Click Counter with Auto Reset

### Task:
- Ek button banaiye.
- Button click hone par counter increase ho aur UI pe show ho.

### Requirements:
- `setInterval()` ka use karke **har 5 second** me counter automatically reset ho jaye (0 ho jaye).

### Extra:
- Ek Stop/Reset Interval button add karo jo auto reset ko stop kare (`clearInterval()`).


---

## 5) Image Slider (Simple)

### Task:
- Ek array me **3-4 images** store karo (URLs).
- Ek `<img>` element banaiye jisme images show ho.
- `setInterval()` ka use karke **har 3 second** me next image show karo.

### Requirements:
- Last image ke baad slider wapas first image pe aaye (looping).

### Extra:
- **Previous button**: previous image show kare
- **Next button**: next image show kare
- Manual click pe `clearInterval()` call karke auto sliding stop ho jaye