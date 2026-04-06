# Chapter 40

## Task

1. Ek project banao jisme user jab bhi browser ka **back arrow**, **forward arrow**, ya **refresh button** click kare, text me ek **message** show ho.  

2. Page par **3 alag buttons** add karo jo directly history functions call kare:  
   - `history.back()` — Back ke liye  
   - `history.forward()` — Forward ke liye  
   - `history.go()` — Current page ke liye  

3. In buttons ke neeche **3 aur buttons** add karo jo `history.go()` function ka use kare:  
   - Back ke liye: `history.go(-1)`  
   - Refresh ke liye: `history.go(0)`  
   - Forward ke liye: `history.go(1)`  

4. Jab user koi bhi action kare (back/forward/refresh ya button click), page par ek **message** show karo jo action ko describe kare:  
   - Example: "You navigated back", "You refreshed the page", etc.  

5. Ensure karo ki message **dynamic ho aur har action ke sath update ho**.