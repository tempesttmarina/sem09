// Coded by Alexandre Chabeau - www.achabe.com | twitter.com/SaucySpray
// SEO friendly - Reusable - JS Vanilla (best flavor)
// Try to combine it with animeJS --> https://codepen.io/Saucy_/pen/aeWeRE

// Uncomment all the way down to get a demo
//					||
//					||
//					||									 ¯\_(ツ)_/¯
//				\	   /
//					\/
// Uncomment all the way down to get a demo


class SplitText {
    constructor(_target, type) {
        this.type = type || true;
        this.result = this.split(_target);
        return this.result;
    }

    split(_target) {

        let containerArray = new Array;
        const splittedTarget = _target.innerText.split(' ');
        let counter = splittedTarget.length;

        splittedTarget.map(word => {

            // Create a wrapper span to contain each letter span
            const split = document.createElement('span');
            split.className = 'word';

            word.split(/(?!^)/).map(char => {
                // Create a span for each letter
                let el = document.createElement('span');
                el.className = 'char';
                // Letter is set as span innerText
                el.innerText = char;
                // Append the letter to his wrapper span
                split.appendChild(el);
            })

            // Decrease counter so we know how many words need to be splitted
            counter --;

            // Append wrapper to array
            containerArray.push(split);

            // Add a space if there is at least one word left to be splitted (avoid space at the end of a sentence)
            if(counter > 0) {
                let space = document.createElement('span');
                space.className = 'char spacer';
                space.innerHTML = '&nbsp;';
                containerArray.push(space);
            }
        })

        // Reset the target inner HTML
        _target.innerHTML = '';

        // Append new splitted text
        containerArray.forEach(child => {
            _target.appendChild(child);
        })

        return _target;
    }

}


// Start Example -- Uncomment all above for a demo


// const button1 = document.querySelector('.button-1')

// const text1 = document.querySelector('.text-1')
// const textSplit = new SplitText(text1)
// const chars = textSplit.querySelectorAll('.char')
// console.log({textSplit})

// button1.addEventListener('click', () => {

// 	chars.forEach(char => {
// 		char.style.color = `hsl(${Math.floor(Math.random() * ((1 + 40) - 1))}, 80%, 70%)`
// 		char.style.transform = `rotate(${Math.floor(Math.random() * ((-12 + 12) - (-12)))}deg)`
// 	})

// })

// const button2 = document.querySelector('.button-2')
// let isPressedOnce = false
// button2.addEventListener('click', () => {
// 	if(!isPressedOnce) {
// 		isPressedOnce = true
// 		const text2 = document.querySelector('.text-2')
// 		new SplitText(text2)
// 	}
// })