/**
 * Custom Hook to simply get a random Star Wars films phrase
 */

const phrases = [
    '“Try not.Do or do not.There is no try.” —Yoda, Star Wars Episode V: The Empire Strikes Back',
    '“Your eyes can deceive you; don’t trust them.” —Obi - Wan Kenobi, Star Wars Episode IV: A New Hope',
    '“Luminous beings we are, not this crude matter.” —Yoda, The Empire Strikes Back',
    '“Who’s the more foolish: the fool or the fool who follows him ? —Obi - Wan Kenobi, A New Hope',
    '“Your focus determines your reality.” —Qui - Gon Jinn, Star Wars Episode I: The Phantom Menace',
    '“No longer certain that one ever does win a war, I am.” —Yoda, The Clone Wars',
    '“In a dark place we find ourselves and a little more knowledge lights our way.” —Yoda, Star Wars Episode III: Revenge Of The Sith',
    '“Sometimes we must let go of our pride and do what is requested of us.” —Anakin Skywalker, Star Wars Episode II: Attack Of The Clones',
    '“We’ll always be with you.No one’s ever really gone.A thousand generations live in you now.” —Luke Skywalker, Star Wars Episode IX: The Rise of Skywalker',
    '“The ability to speak does not make you intelligent.” —Qui - Gon Jinn, The Phantom Menace',
    '“Difficult to see; always in motion is the future.” —Yoda, The Empire Strikes Back',
    '“Many of the truths that we cling to depend on our viewpoint.” — Obi - Wan Kenobi, Star Wars Episode VI: Return Of The Jedi',
    '“Train yourself to let go of everything you fear to lose.” —Yoda, Revenge Of The Sith',
    '“I like firsts.Good or bad, they’re always memorable.” —Ahsoka Tano, The Mandalorian',
    '“Great, kid, don’t get cocky.” —Han Solo, A New Hope',
    '“Congratulations.You are being rescued.” —K - 2SO, Rogue One: A Star Wars Story',
    '“Sorry lady.I don’t understand frog.” —Din “The Mandalorian” Djarin, The Mandalorian',
    '“Insolence ? We are pirates.We don’t even know what that means.” —Hondo Ohnaka, The Clone Wars',
    '“I am not a committee.” —Princess Leia, The Empire Strikes Back',
    '“I’m a Mandalorian.Weapons are part of my religion.” —Mando, The Mandalorian',
    '“Come on, baby! Do the magic hand thing.” —Greef Karga, The Mandalorian',
    '“Be careful not to choke on your aspirations, director.” —Darth Vader, Rogue One',
    '“Once you start down the dark path, forever will it dominate your destiny.” —Yoda, The Empire Strikes Back',
    '“Fear leads to anger, anger leads to hate, hate leads to suffering.” —Yoda, The Phantom Menace',
    '“I’ve seen what such feelings can do to a fully trained Jedi Knight.To the best of us.” —Ahsoka Tano, The Mandalorian',
    '“The fear of loss is a path to the dark side.” —Yoda, Revenge Of The Sith',
    '“Let go of your hate.” —Luke Skywalker, Return Of The Jedi',
    '“Strike me down in anger and I’ll always be with you.Just like your father.” —Luke Skywalker, Star Wars: Episode VIII: The Last Jedi',
    '“There’s always a bigger fish.” —Qui - Gon Jinn, The Phantom Menace',
    '“In my experience, there’s no such thing as luck.” —Obi - Wan Kenobi, A New Hope',
    '“Never underestimate a droid.” —General Leia Organa, The Rise of Skywalker',
    '“I guess every once in a while both suns shine on a womp rat’s tail.” —Cobb Vanth, The Mandalorian',
    '“As my sweet mother always said, ‘Son, if one hostage is good, two are better.And three, well, that’s good business.” —Hondo Ohnaka, The Clone Wars',
    '“I am one with the Force and the Force is with me.” —Chirrut, Rogue One',
    '“I got a bad feeling about this.” —Lando Calrissian, “The Rise of Skywalker',
    '“These aren’t the droids you’re looking for.” —Obi - Wan Kenobi, A New Hope',
    '“This is the way.” —Mando, The Mandalorian',
    '“You can’t stop change any more than you can stop the suns from setting.” —Shmi Skywalker, The Phantom Menace',
    '“Women always figure out the truth.Always.” —Han Solo, The Force Awakens',
    '“I find your lack of faith disturbing.” —Darth Vader, A New Hope',
    '“I don’t want your armor.I want my armor.” —Boba Fett, The Mandalorian',
    '“Never tell me the odds.” —Han Solo, The Empire Strikes Back',
    '“A friendly piece of advice; assume that I know everything.” —Moff Gideon, The Mandalorian',
    '“I’m a big deal in the resistance.” —Finn, The Force Awakens',
    '“In my experience, there’s no such thing as luck.” —Obi - Wan Kenobi, A New Hope',
    '“In my book, experience outranks everything.” — Captain Rex, The Clone Wars',
    '“Can I offer you a libation to celebrate the closing of our shared narrative ?” —The Client, The Mandalorian',
    '“We stand here amidst my achievement.Not yours!” —Director Orson Krennic, Rogue One',
    '“Stand together, die together.Let your death be the final word in the story of rebellion.” —Emperor Palpatine, The Rise of Skywalker',
    '“Let the past die.Kill it if you have to.” —Kylo Ren, The Last Jedi',
    '“So this is how liberty dies … with thunderous applause.” —Queen Amidala, Revenge of The Sith',
    '“We had each other.That’s how we won.”—Lando Calrissian, The Rise of Skywalker',
    '“Save the rebellion! Save the dream!” —Saw, Rogue One',
    '“I was not elected to watch my people suffer and die while you discuss this invasion in a committee.” —Queen Amidala, The Phantom Menace',
    '“That’s how we’re gonna win.Not fighting what we hate, saving what we love.” —Rose, The Last Jedi',
    '“Make ten men feel like a hundred.”—Cassian Andor, Rogue One',
    '“The First Order wins by making people think they are alone.We’re not alone.Good people will fight if we lead them.” —Poe Dameron, The Rise of Skywalker',
    '“A thousand generations live in you now.But this is your fight.”—Luke Skywalker, The Rise of Skywalker',
    '“Rebellions are built on hope.” —Jyn, Rogue One'

]

const useWisdom = () => {
    const r = phrases[Math.floor(Math.random() * phrases.length - 1)]
    return r;
}


export default useWisdom;





