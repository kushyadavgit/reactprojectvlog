import React, { useState, createContext } from "react";
// import Home from '../../Routes/Home/index'

export const AppData = createContext();
function Store(props) {
  const [data, setdata] = useState([
    {
      id: 1,
      ide: 1,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/master/pass/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg",
      date: " 02/17/2023 ",

      title: "Breaking from marvels ",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp', but here she's excellent from beginning to end. Elsewhere, Jonathan Majors is brilliant - great to see that guy all over the place recently. Paul Rudd remains a strong lead, while the likes of Michael Douglas and Kathryn Newton are positives too.\n\nLove the Quantum Realm setting. I'm nothing like an MCU nut, I'm only aware of the films, so didn't know what to expect, but the place looks fantastic - from the environment to the creatures; shoutout Veb. Like Pfeiffer, Corey Stoll didn't really register on my radar in prior films, but him as M.O.D.O.K. is a lot of fun.\n\nLooking at my personal MCU ranking, this goes in at no. 8 - I didn't anticipate that! A literal quick glance at the average rating on here suggests I'm in the minority but I truly found much enjoyment from this. Quite the improvement on Ant-Man 2, which is at the bottom of my aforementioned ranking.",
    },
    {
      id: 2,
      ide: 2,
      cat: "Hollywood",
      sp: "home-banner",
      for: "ArticleList",
      date: " 03/24/2023",
      title: " what can we expect from Marvel in 2023?",
      img2: "https://prod.assets.earlygamecdn.com/images/marvel2023.png?mtime=1673535586",
      img: "https://prod.assets.earlygamecdn.com/images/marvel2023.png?mtime=1673535586",
      Overview:
        "Ever since Tony Stark alias Iron Man launched Phase 1 of the Marvel Cinematic Universe in 2008, we have been subjected to an endless amount of Marvel movies, both good and bad. From the depths of The Incredible Hulk and the first two Thor movies, to the heights of Iron Man and Captain America: Winter Soldier, they never seem to let up, providing us with an endless amount of superhero content both in film form and as television shows.",
      description:
        "So, what can we expect from Marvel in 2023? A bunch of sequels, it seems. We got another Ant-Man movie nobody needs. The Guardians of the Galaxy are back as well, which is okay. Another Spider-Verse movie, now that is something to look forward to. The Marvels? I don't really care. Uh, and we're gonna start with a standalone for Kraven the Hunter! Now that is something I can get on board with.Ant-Man might not be my favorite superhero, but his impact on the MCU has been undeniable. Paul Rudd is pretty great as Scott Lang, it's just that I don't particularly enjoy the plot, villains or superpowers Ant-Man provides.",
    },
    {
      id: 3,
      ide: 3,
      cat: "Hollywood",
      for: "ArticleList",
      date: " 03/03/2023",
      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
      title: "Creed III",
      Overview:
        "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. ",
      description:
        "This reminded me quite a lot of 'Rocky IV' (1985) only instead of a Russian auto-box doing the challenging, it's 'Damian' (Jonathan Majors). Former champion 'Adonis' (Michael B. Jordan) is living the life of a retired sportsman, wealthy and happy with his family whilst managing the gym with 'Duke' (Wood Harris). Leaving, one afternoon, he discovers a guy sitting on his car and after a quick chat realizes that it's his long-lost childhood pal who has been incarcerated for the last eighteen years. He ('Damian') is now determined to succeed in the ring and so his friend tries to sort it all out - only to discover that this lean, mean, fighting machine has an altogether different agenda and that is going to force the former champ to prove whether or not he still has what it takes. The story is a hybrid of too many others and plays out as predictably as the sun coming up. Add to the mix a degree of familial discord and melodrama and we are left with something largely forgettable that I found to be a pretty poor relation of the previous, much more charismatic and grittier efforts in this franchise. The actual boxing scenes are impressively photographed but there's just no jeopardy - and I'd largely given up. Pretty to look at, yes - but not a great watch.",
    },
    {
      id: 4,
      ide: 4,
      cat: "Hollywood",
      for: "ArticleList",
      date: " 05/05/2023",
      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      title: "Guardians of the Galaxy Vol. 3",
      Overview:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      description:
        "Guardians of the Galaxy Vol. 3 is the perfect farewell to this quirky group of rogues we never expected to love so much.\n\nOur faith in the Marvel Cinematic Universe waned throughout Phase 4 with films that felt hollow, rushed, and insincere. Guardians of the Galaxy Vol. 3 rekindled my hope as James Gunn and the cast’s love and passion for these characters shined in every moment of this beautiful, heartfelt send-off. Gunn reminded us of the magic of comic book movies when the storyteller cares more about the characters than the box office. Chris Pratt, Bradley Cooper, Karen Gillan, Dave Bautista, and the rest of the cast pour themselves into entertaining and genuine performances. This film is surprisingly emotional and had me wondering how they convinced me to care so deeply about such a zany group of goofballs, but that they did. Vol. 3 is one of the best conclusions to a film trilogy that had me leave the theater full of satisfaction and nostalgia. While Guardians of the Galaxy Vol. 3 is wonderful in nearly every way, if I had a complaint, it would be the soundtrack felt forced at times rather than complimenting strong moments in the first film. The villain wasn’t exceptional but was better than the average Marvel villain, and honestly, Vol. 3 wasn’t about the villain or battles as much as it was a farewell to a family of heroes we have all come to love. This movie is well worth your time, and the fantastic effects and cinematography warrant a trip to the cinema to enjoy it to its fullest! MCU doubters need to set aside their skepticism and enjoy saying goodbye to these beloved characters with this outstanding film.",
    },
    {
      id: 5,
      ide: 5,
      cat: "Hollywood",
      for: "ArticleList",
      date: "04/18/2023 ",
      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
      title: "Ghosted",
      Overview:
        "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
      description:
        "The direction and visuals were all fairly good. The visuals looked fine for the majority of the film with no complaints whatsoever, including Ana de Armas’ wig. The direction was good, with some decent action choreography that was filmed pretty well, although there were a few scenes that suffered from too many jump cuts. I thought the intimate scene towards the beginning of the film was very stylistic and done really well. It was not just your standard grunts and moans that you see in so many films today.\n\nThe story was very oddly paced. The beginning section was really rushed, and the romantic build-up did not feel genuine in the slightest. Due to a poor script, their chemistry was non-existent in some sections, as the dialogue was atrocious. While there are some laughs to be had for sure, the majority of the comedy did not work for me. There was heavy use of modern songs throughout the entirety of the film. While some sections were complimented by the tracks, many others felt really out of place.\n\nThe performances were decent, but I think were hindered by the poor script. Ana de Armas was fine, although I never really liked her in anything since Knives Out as her performances always seem a little dull. Chris Evans played a character he's played many times before, which was entertaining, but he could not alone save the terrible dialogue he was given. ",
    },
    {
      id: 6,
      ide: 6,
      cat: "Hollywood",
      for: "ArticleList",
      sp: "home-latestBig",
      date: " 12/16/2022",
      img2: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      img: "https://assets-prd.ignimgs.com/2022/03/18/spidermannowayhomeexclusivefirst10minutesignblogroll-1647047297213-1647633871978.jpeg",
      title: "Spiderman ",
      Overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      description:
        "More than ten years have passed since the events of the first Avatar film. Avatar: The Way of Water sees Jake Sully (Sam Worthington) as chief as he and Neytiri (Zoe Saldana) now have five children. Humans have returned to Pandora once again to attempt to colonize it. ",
    },
    {
      id: 7,
      ide: 7,
      cat: "Hollywood",
      for: "ArticleList",
      date: " 03/17/2023 ",
      img: "https://www.xtrafondos.com/wallpapers/vertical/baby-groot-guardianes-de-la-galaxia-3180.jpg",
      title: "GROOT IS Back ",
      Overview:
        'Groot was a Flora colossi from Planet X, the capital of the branch worlds. He did not get along with his fellow saplings, instead preferring the company of the "Maintenance Mammals" who the other saplings treated with prejudice. After Groot killed another sapling to defend a maintenance mammal it was brutalising, as well as releasing a human subject that was kidnapped for scientific purposes, he was exiled from the planet by the "Arbor Masters."[11][12] With no place to go, Groot set to explore other galaxies.[12]',
      description:
        "Into his adulthood, Groot found himself in Kree space, where he was promptly captured and imprisoned. While in jail, he formed a rapport with Rocket Raccoon and was assigned to a covert ops team led by Starlord, whose goal was to assault Hala and defeat the Phalanx. His body was mostly destroyed, but a small twig of him split off, preserving him, traveling in the care of Rocket Raccoon, fitting easily in his hand or riding on his shoulder. Groot had fully regrown himself soon after their mission was complete.[13] Groot then continued to help Starlord and the others he had teamed up with to fight the Phalanx, once again sacrificing himself to save the others and regrowing from a twig.[everyday people. The stakes have gotten so high outside of the everyday troubles that this art is lost. I really enjoyed that aspect of the film, but unfortunately, after the first act, this story becomes inflated to a point where it is indistinguishable from many other superhero blockbusters.\n\n The final act is overly long and bloated with a plethora of CGI monsters for our heroes to defeat. I think the CGI actually looked pretty good, but it just was not an engaging conclusion for me. The stakes were high, but not built up properly for me to be genuinely interested. The action is pretty decent, but I couldn’t care less. The finale did have emotional beats in terms of the family connection, which worked surprisingly well. That is when this franchise works best. When the focus is on family and not on god's attempts to destroy Earth, \n\n The performances overall were pretty good. Zachary Levi is fantastic as Shazam; he has mastered the art of playing a child in a man's body. Jack Dylan Grazer is hilarious; his comedic timing is brilliant. Grace Caroline Currey is a queen. Rachel Zegler is a standout, and her chemistry with Grazer is top notch. The rest of the Shazamly do a great job as well. I think Helen Mirren and Lucy Liu are fine as antagonists but were wasted with a lack of screen time and development. \n\n Overall, this might not be good, but it is entertaining. That is a lot more than can be said for some of the recently released superhero films (Black Adam and Ant-Man and the Wasp: Quantumania). ",
    },
    {
      id: 8,
      ide: 8,
      cat: "Hollywood",
      for: "TopList",
      date: " 04/21/2023",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
      title: "Evil Dead Rise",
      Overview:
        "Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
      description:
        "This is certainly a triumph for the visual and audio effects folks. Otherwise, I found it all a bit derivative and frankly a rather classless rehash of the much more entertaining original. It's tough to just keep on re-inventing these themes - they do tire, and as I reckon with the recent updates of the Halloween franchise, they maybe just rely too heavily on a current generation who were not around to see the originals in the cinema first time round, and who maybe just don't appreciate that the acting and the writing - though never exactly crucial to these plots - did have more of a role than just relying on well made-up (virtual) demons spinning around the ceiling emitting threatening shrieks. It's not terrible - it moves along quickly for ninety minutes and might just put you off a bath anytime shortly afterwards, but there just isn't any real sense of menace or jeopardy and to be honest I wasn't entirely sure that the family weren't nightmarish enough - before their visitor arrived. ",
    },
    {
      id: 9,
      ide: 9,
      cat: "Hollywood",
      for: "TopList",
      date: " 04/21/2023  ",
      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg",
      title: "TGuy Ritchie's The Covenant",
      Overview:
        "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
      description:
        "Director Guy Ritchie is no stranger to crafting exciting action films, but his latest project is quite different than his previous work. The narrative is linear, there aren’t any montages, and the story isn’t about criminals, gangsters, or Brits. Fans of Ritchie will absolutely still recognize his visual style (hello, overhead shots) and testosterone-fueled themes, but 'The Covenant' is a more dramatic, mature, and restrained work from the legendary director.\n\nSet during the war in Afghanistan in 2018, the film tells the story of U.S. Army sergeant John Kinley (Jake Gyllenhaal) and his local Afghan interpreter, Ahmed (Dar Salim). Called a traitor by his people for helping the Americans, Ahmed has volunteered to seek revenge against the Taliban that killed his son. He has also been promised visas for his service so his family can flee to safety in America. After a lethal ambush in the desert, Kinley is gravely injured by enemy fire. With his platoon gone, Ahmed refuses to leave a fellow soldier behind to die, so he drags Kinley through the mountainous terrain in order to get him back to the base for medical help.\n\nThe film tells the story of their 100 mile journey, but then pivots to Kinley’s return to the United States. It’s months after he gets home that Kinley learns Ahmed and his family were not given safe passage as promised and, as a way to repay the debt he owes his friend, he returns to Afghanistan to retrieve them. It won’t be easy, because Ahmed has been placed at the top of the Taliban’s most wanted hit list.\n\nIt’s a meaningful story of honor and brotherhood wrapped up in an intense wartime thriller. The story is told in three major acts, from the early days Ahmed and Kinley spent chasing IEDs, to their dangerous journey, to the red tape of getting a man what he’s owed. There are plenty of thrilling acting sequences throughout, and they will keep you on the edge of your seat.\n\nRitchie has an extraordinary sense of timing and instincts for shooting action scenes, and the brutal, graphic wartime violence puts you in the be-or-be-killed survival mind of a front line soldier.",
    },
    {
      id: 10,
      ide: 10,
      cat: "Hollywood",
      for: "TheTopList",
      date: "  09/03/2022",
      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7yyFEsuaLGTPul5UkHc5BhXnQ0k.jpg",
      title: "The Last Kingdom: Seven Kings Must Die",
      Overview:
        "In the wake of King Edwards death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
      description:
        " Seven Kings Must Die is the conclusion of The Last Kingdom series. A conclusion that didn't feel necessary as the story ended with a satisfying resolution and characters we had grown to love over five seasons finding happiness and a rewarding future. Instead, this 2-hour movie is more of a finale that disrupts our story's happy ending and leaves it all with less closure than before. With the promise of a movie, I was hoping that the film would enjoy greater production quality and resources than the typical show, but that was not the case. Seven Kings Must Die was just an entire season of The Last Kingdom crammed into 2 hours. Fans of the series might enjoy seeing more of their favorite characters (although they might be disappointed with the conclusion of those characters' stories). Unfortunately, those unfamiliar with The Last Kingdom would be confused by the partial narrative they receive with this film. Seven King Must Die might have been a decent finale to an additional season of the show, but as someone who liked how the show ended, I wish I had joined my wife and gone to bed without finishing the film. The show is excellent, so watch that instead. It really isn't as bad as I am sharing, but I was happier as a fan without it, and non-fans would probably not find it worth their time, either.",
    },
    {
      id: 11,
      ide: 11,
      cat: "Hollywood",
      for: "TopList",
      date: " 05/04/2023",
      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vnRthEZz16Q9VWcP5homkHxyHoy.jpg",
      title: "The Mother ",
      Overview:
        "A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.",
      description:
        "Ironically, these tale about a mother and daughter, fails because the male characters have no depth. The villain is evil sure, but also extremely stupid and escaping from her first attempt to kill him in a very unbelievable and unexplained way.\n\nThe romantic tension between Cruise and the mother also doesn't work and the age old friendship with Jons is also not given any backstory. I'm enclined to blame the casting here. Well, the story was lacking and oddly edited as well, but it may be because there wasn't much to work with. Either way, it's clear this is supposed to be about a mother/daughter relationship, but also be an action move and the director / writers / actors couldn't make it work. 3/10, 2 points cause I've seen worse, not because I can find something positive in it. ",
    },
    {
      id: 12,
      ide: 1,
      cat: "Bollywood",
      for: "ArticleList",
      date: " 08 March, 2023 ",
      img: "https://www.scrolldroll.com/wp-content/uploads/2023/03/pathaan-best-bollywood-movies-of-2023.jpg",
      title: "Pathaan  ",
      Overview:
        "Released in January of this year, Pathaan inaugurated the year for Bollywood with a bang. The return of King Khan to the screen after a long break along with Deepika Padukone’s role in an action film garnered a lot of attention making the film one of their highest-grossing movies! The movie has it all: action, romance, sensuality, drama and bang-on songs, and available on Amazon Prime..",
      description:
        " in January of this year, Pathaan inaugurated the year for Bollywood with a bang. The return of King Khan to the screen after a long break along with Deepika Padukone’s role in an action film garnered a lot of attention making the film one of their highest-grossing movies! The movie has it all: action, romance, sensuality, drama and bang-on songs, and available on Amazon Prime.Released in January of this year, Pathaan inaugurated the year for Bollywood with a bang. The return of King Khan to the screen after a long break along with Deepika Padukone’s role in an action film garnered a lot of attention making the film one of their highest-grossing movies! The movie has it all: action, romance, sensuality, drama and bang-on songs, and available on Amazon Prime. ",
    },
    {
      id: 13,
      ide: 2,
      cat: "Bollywood",
      for: "ArticleList",
      sp: "home-latestArt",
      date: " 25 January, 2023",
      img: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      title: "3 Idiots",
      Overview:
        "3 Idiots is a 2009 Indian Hindi-language coming-of-age comedy-drama film directed by Rajkumar Hirani, and also co-written by him with Abhijat Joshi. The film stars Aamir Khan, R. Madhavan, Sharman Joshi, Kareena Kapoor, Boman Irani and Omi Vaidya. The film follows the friendship of three students at an Indian engineering college and is a satire about the social pressures under an Indian education system. The film is narrated through parallel dramas, one in the present and the other ten years in the past.",
      description:
        " It was produced by Vidhu Vinod Chopra under the banner of Vinod Chopra Films, and based on Chetan Bhagat's novel Five Point Someone: What not to do at IIT! for which author was not suitably credited, the film incorporated real Indian inventions created by Remya Jose, Mohammad Idris, Jahangir Painter and Sonam Wangchuk. It received widespread critical and commercial success upon its release on 25 December 2009. It was also the highest-grossing film in its opening weekend in India, had the highest opening day collections for an Indian film up until that point and also held the record for the highest net collections in the first week for a Bollywood film. It also became one of the few Indian films at the time to become successful in East Asian markets such as China and Japan, eventually bringing its worldwide gross to ₹3.92 billion ($90 million) — it was the highest-grossing Indian film ever at the time. The film also had a social impact on attitudes to education in India, as well as education in other Asian countries such as China.The film won six Filmfare Awards including Best Film and three National Film Awards including Best Popular Film. Overseas, it won the Grand Prize at Japan's Videoyasan Awards while it was nominated for Best Outstanding Foreign Language Film at the Japan Academy Awards and Best Foreign Film at China's Beijing International Film Festival. This film was remade in Tamil as Nanban (2012), which also received critical praise and commercial success. A Mexican remake, 3 idiotas, was also released in 2017.",
    },
    {
      id: 14,
      ide: 3,
      cat: "Bollywood",
      for: "ArticleList",
      date: " 06 September, 2019 ",
      img: "https://www.scrolldroll.com/wp-content/uploads/2023/03/mission-majnu-best-bollywood-movies-of-2023.jpg",
      title: " Mission Majnu ",
      Overview:
        "This romantic and full comedy movie fits the Bollywood funny Hindi movie template perfectly: it boasts flamboyant colors, songs, dance, and, more importantly, a big fat Indian wedding. It tells of two characters, Bunny (Kapoor) and Naina (Padukone), and their group of friends, who we first meet as they leave university before the film flashes forward to the end of their twenties. What made the film doubly successful was that its two stars were former lovers in real life, lending them special chemistry onscreen.",
      description:
        " Mission Majnu is a Netflix release that revolves around one of the most covert operations conducted by India in the 1970s. Starring Siddharth Malhotra and Rashmika Madanna, the movie was a true portrayal of the young stars’ acting abilities. A simple well-executed plotline with the right amount of patriotism and romance is what attracted the audience making Mission Majnu one of the best Bollywood movies of 2023.",
    },
    {
      id: 15,
      ide: 4,
      cat: "Bollywood",
      for: "ArticleList",
      img: "https://www.pinkvilla.com/images/2022-09/veer_zara.jpeg",
      title: "Veer-Zaara",
      date: "11 January, 2004",
      Overview:
        "Yash Chopra, Bollywood’s most successful and respected director, delivers a groundbreaking musical romance on an epic scale. Will the Hindi love story that Indian Hindu Veer (Khan) and Pakistani Muslim Zaara (Zinta) feel for each other be able to overcome cross-cultural, emotional, and physical borders? Chopra employs his trademark ‘chiffon sari in the Swiss Alps’ style while including progressive political and social messages about Indo-Pak unity, women’s rights, inept justice and hope for the future. The late composer Madan Mohan and Lata Mangeshkar’s tunes achieve lyrical perfection. The result is an uplifting, colorful and soulful gem.",
      description:
        "Yash Chopra, Bollywood’s most successful and respected director, delivers a groundbreaking musical romance on an epic scale. Will the Hindi love story that Indian Hindu Veer (Khan) and Pakistani Muslim Zaara (Zinta) feel for each other be able to overcome cross-cultural, emotional, and physical borders? Chopra employs his trademark ‘chiffon sari in the Swiss Alps’ style while including progressive political and social messages about Indo-Pak unity, women’s rights, inept justice and hope for the future. The late composer Madan Mohan and Lata Mangeshkar’s tunes achieve lyrical perfection. The result is an uplifting, colorful and soulful gem. ",
    },
    {
      id: 16,
      ide: 5,
      cat: "Bollywood",
      for: "ArticleList",
      date: " 19 December, 2014",
      img: "https://m.media-amazon.com/images/M/MV5BMmZkYmZmN2YtOTNkNC00NTg5LWJlM2UtZjg2MWRlMGY2N2FiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      title: "Kati-Patang",
      Overview:
        "Inspired by the Hollywood weepie ‘No Man of Her Own (1950), Shakti Samanta’s film addresses the still-taboo theme of widows remarrying. The film goes out of its way to proclaim the untainted virgin status of its female lead, as Madhu (Parekh) only pretends to be a widow to assume a new identity. Complications follow when she is attracted to her ‘dead’ husband’s best mate (Khanna). The real superstar of this melodramatic film is RD Burman’s classic score: every track remains popular to this day.",
      description:
        "Inspired by the Hollywood weepie ‘No Man of Her Own (1950), Shakti Samanta’s film addresses the still-taboo theme of widows remarrying. The film goes out of its way to proclaim the untainted virgin status of its female lead, as Madhu (Parekh) only pretends to be a widow to assume a new identity. Complications follow when she is attracted to her ‘dead’ husband’s best mate (Khanna). The real superstar of this melodramatic film is RD Burman’s classic score: every track remains popular to this day. ",
    },
    {
      id: 17,
      ide: 6,
      cat: "Bollywood",
      for: "ArticleList",
      date: " 22 December, 2017",
      img: "https://i.ndtvimg.com/i/2017-10/salman-tiger-zinda-hai-twitter_650x400_61509363952.jpeg",
      title: "Tiger Zinda Hai",
      Overview:
        "Tiger (Salman Khan) and Zoya (Katrina Kaif) escape from the clutches of ISI and RAW and then they start living an idyllic life somewhere in the snow-covered ranges of Europe. Meanwhile in Ikrit, Iraq, Abu Usman (Sajjad Delafrooz) emerges as the head of ISC which turns into the world’s richest...",
      description:
        " Tiger (Salman Khan) and Zoya (Katrina Kaif) escape from the clutches of ISI and RAW and then they start living an idyllic life somewhere in the snow-covered ranges of Europe. Meanwhile in Ikrit, Iraq, Abu Usman (Sajjad Delafrooz) emerges as the head of ISC which turns into the world’s richest and the most dangerous terrorist organization. The Americans are angry and they launch an attack on Abu and his convoy, and it injures Abu. At the same time, a group of 40 nurses – 25 Indian and 15 Pakistani – are heading to the hospital where they work. Abu’s men force the nurses to take an injured Abu with them for immediate treatment. They also take over the hospital and keep the nurses as hostage. The Americans then decide to launch an airstrike on the hospital within 7 days. Hence, the Indians have just a week to rescue the nurses. Infiltrating into the high security ISC region is next to impossible. The senior officer of RAW, Shenoy (Girish Karnad) suggests that Tiger should be called in as he’s the only one who can successfully complete this mission. Tiger is found and he takes up the job. How Tiger manages to infiltrate the ISC area and rescue the nurses forms the rest of the film",
    },
    {
      id: 18,
      ide: 7,
      cat: "Bollywood",
      for: "ArticleList",
      date: " 31 May, 2013",
      img: "https://m.media-amazon.com/images/I/81hpcJ-hoIL.jpg",
      title: "Dilwale Dulhania Le Jayenge",
      Overview:
        "It is a story of the exhilarating and terrifying journey of four characters as they navigate through their youth; from their carefree laughter as they set off on a holiday together in their colleges days, until their bittersweet tears as they watch the first of their bunch get married.",
      description:
        "Familiar themes of personal choice versus family responsibility, and forbidden love, are remixed for the 1990s in this epic, era-defining romance. In London, Raj (Khan) is an immature young man, while straight-laced Simran (Kajol) is all set for a marriage arranged by her domineering father. She goes InterRailing in Europe, meets Raj and they fall in love against the backdrop of Swiss mountains. The popularity of the film (the title translates as ‘The brave-hearted will take away the bride’) is reflected in the fact that it has screened daily in Mumbai’s Maratha Mandir cinema for 19 years and counting. This ultimate romance also raised the bar impossibly high for guys chasing girls.",
    },
    {
      id: 19,
      ide: 8,
      sp: "home-ban",
      cat: "Bollywood",
      for: "TopList",
      date: " 28 April, 2017",
      img2: "https://cdn.bollywoodmdb.com/fit-in/post/ShahRukhKhan83850_1691666246053.jpg",
      img: "https://cdn.bollywoodmdb.com/fit-in/post/ShahRukhKhan83850_1691666246053.jpg",
      title:
        "Jawan: Shah Rukh Khan UNVEILS New Poster Showcasing Lead Cast Nayanthara, And Vijay Sethupathi Taking Center Stage! (View PIC)",
      Overview:
        "Get ready for the highly anticipated, 'Jawan,' SRK today dropped the brand new poster today, showcasing the lead starcast.This poster is a sneak peek into the remarkable roles these superstars are set to portray in the film. And guess what? This poster offers a glimpse of the epic face-off between SRK and Vijay Sethupathi for the very first time!.",
      description:
        " We're only a month away from the release of Shah Rukh Khan's 'Jawan,' and the excitement surrounding this movie is absolutely electrifying. With each passing day, the hype grows stronger, intensifying the anticipation of witnessing King Khan's magic on the silver screen. While the 'Jawan' Prevue has already captured our hearts, the debut song 'Zinda Banda' has solidified its place in our playlist.Now, taking innovation even further, the makers have unveiled the new lead cast poster featuring SRK, Nayanthara, and Vijay Sethupathi. Seeing SRK, Nayanthara, and Vijay Sethupathi in their unique characters through this poster has intensified the buzz around the film even more. It's making us all the more excited for the movie to hit theaters. The eagerness to see them all together on that gigantic cinema screen is at an all-time high, promising to sweep us off our feet with excitement. ",
    },
    {
      id: 20,
      ide: 9,
      cat: "Bollywood",
      for: "TheTopList",
      sp: "home-Toplist",
      date: "14 April, 2022 ",
      img: " https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzUwNC00ZDdhLTk0MWUtOGZjYzFlOTBmNDdhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
      title: "Pushpa ",
      Overview:
        "KGF - CHAPTER 2 [Hindi] is the story of a man who faces new challenges after successfully taking over an empire. Rocky kills Garuda (Ramachandra Raju) in the Kolar Gold Fields, aka, KGF, and takes charge, much to the annoyance of Guru Pandian (Achyuth Kumar), Andrews (B S Avinash), Rajendra...",
      description:
        " KGF - CHAPTER 2 [Hindi] is the story of a man who faces new challenges after successfully taking over an empire. Rocky kills Garuda (Ramachandra Raju) in the Kolar Gold Fields, aka, KGF, and takes charge, much to the annoyance of Guru Pandian (Achyuth Kumar), Andrews (B S Avinash), Rajendra Desai (Lakki Lakshman). They had expected to rule KGF and take over its immense wealth. However, Rocky, with the help of the slaves who consider him a messiah, usurps the throne. He even kills Virat (Vinay Bidappa), brother of Garuda and the heir apparent to the KGF throne. Rocky however spares Vanaram (Ayyappa P Sharma), the commander of the army at KGF. Vanaram, angry at first, joins Rocky and trains young kids who become the new guards of the territory. Rocky discovers that there are several unexcavated mines in the area and he orders the men to start extracting gold from these places. The idea is to discover as much gold as possible in the shortest possible time. Meanwhile, Adheera (Sanjay Dutt), brother of Suryavardhan, the founder of KGF, was presumed dead. However, he is alive and arrives at KGF for revenge and to claim ownership. He smartly gets Rocky out of KGF and shoots him. He allows Rocky to survive so that the word is spread in KGF that the terrifying Adheera is here. Rocky recuperates but realizes that no one is able to move out of KGF as Adheera’s men have surrounded the mines. Meanwhile, Shetty (Dinesh Mangaluru), Rocky’s ex-boss in Bombay, has tied up with fellow gangsters across West and South India, and plans to act against Rocky. They are also dealing with Inayat Khalil (Balakrishna), a dreaded gangster from Dubai. How Rocky fights all these elements forms the rest of the film.",
    },
    {
      id: 21,
      ide: 10,
      cat: "Bollywood",
      for: "TopList",
      date: " 25 December, 2009 ",
      img: " https://stat5.bollywoodhungama.in/wp-content/uploads/2016/05/439543855-306x393.jpg",
      title: "3 Idiots",
      Overview:
        "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
      description:
        " 3 IDIOTS belongs to everyone. But, yes, there's no denying that Aamir makes you forget all his past achievements as you watch the amazing actor play Rancho. To state that this ranks amongst his finest works would be an understatement. Madhavan is incredible, especially in the sequence when he explains his point of view to his father [Pareekshit Sahani]. Sharman is outstanding from start to end. This was a difficult role to portray and only an actor of calibre could've pulled it off. Boman is superb as the vicious head of the institute. The scenes between Aamir and Boman are extra-ordinary and it's a treat to watch these two powerful actors clash on the big screen, without getting overdramatic. Boman's appearance, mannerisms and dialogue delivery are exemplary.\n\nThe length of Kareena's role may not be as much as Aamir, Madhavan and Sharman, but she registers a strong impact nonetheless. Omi is excellent and the viewers are sure to love his acidic tongue and gestures in the movie. Mona Singh doesn't get much scope. Jaaved Jaffery is competent. Pareekshit Sahani is decent.\n\nOn the whole, 3 IDIOTS easily ranks amongst Aamir, Rajkumar Hirani and Vidhu Vinod Chopra's finest films. Do yourself and your family a favour: Watch 3 IDIOTS. It's emotional, it's entertaining, it's enlightening. The film has tremendous youth appeal and feel-good factor to work in a big way.",
    },
    {
      id: 22,
      ide: 11,
      cat: "Bollywood",
      for: "TopList",
      date: "12 July, 2019 ",
      img: "https://stat5.bollywoodhungama.in/wp-content/uploads/2017/06/Super-30-1-306x393.jpg ",
      title: "Super 30",
      Overview:
        "SUPER 30 is the story of a selfless man fighting for the cause of education-for-all. The year is 1996. Anand Kumar (Hrithik Roshan) has completed his graduation and is passionate about mathematics. He’s so good in the subject that he is felicitated at the hands of the education minister (Pankaj...",
      description:
        "UPER 30 is the story of a selfless man fighting for the cause of education-for-all. The year is 1996. Anand Kumar (Hrithik Roshan) has completed his graduation and is passionate about mathematics. He’s so good in the subject that he is felicitated at the hands of the education minister (Pankaj Tripathi). Anand manages to solve a complex mathematical problem, which has baffled scholars all around the world. His feat lands him a seat in the prestigious Cambridge University. His father Eshwar Kumar (Virendra Saxena) is a postman who takes out his PF to fund Anand’s foreign education. When the money falls short, he and Anand knock at the doors of the education minister, who had promised him help. But the minister refuses to help. Meanwhile, Eshwar passes away one day suddenly. He was the only earning member of the family and hence, Anand sheds his ambition and begins selling papad to survive. One day, he bumps into Lallan Singh (Aditya Srivastava) who runs Excellence Coaching Centre, an institute for those giving the IIT-JEE exams. He is aware of Anand’s brilliance in mathematics since he was in the college when Anand was felicitated. He gets Anand enrolled in his coaching institute as a premium teacher. Since Anand’s teaching methods guarantee success, he becomes quite sought after. Excellence Coaching Centre management even promote themselves by using Anand’s picture on their banners. Anand’s financial condition also improves as he’s even made one of the signatories. However, he soon realizes that some brilliant students aren’t getting a fair chance to excel in life because of their underprivileged background. Overnight, Anand quits Excellence Coaching Centre. He starts his own centre, where he decides to teach 30 students for IIT entrance exams for free. Not just that, he even arranges for their accommodation and food. Lallan obviously is livid and he tries his best to persuade Anand. When nothing works, he tries to demotivate Anand, saying that all his students who fail will go back to their impoverished lives. It’s important that each and every student of Anand manages to crack the IIT exam. What happens next forms the rest of the film. ",
    },
    {
      id: 23,
      ide: 1,
      cat: "Food",
      for: "ArticleList",
      date: " MAY 15, 2023",
      img: "https://images.everydayhealth.com/images/top-healthy-food-trends-2023-1440x810.jpg?sfvrsn=e3275996_4",
      title: "Economical Eats",
      Overview: "While food prices won’t grow at the staggering rate",
      description:
        "While food prices won’t grow at the staggering rate they did in 2022 — which was as much as 12 percent — they will continue to rise above historical average rates, according to data from the U.S. Department of Agriculture (USDA). That means more people saving money by preparing their own meals at home, given that eating out costs more than 3 times as much, on average, according to The NPD Group, a market research firm.It also means looking for ways to save on groceries. “A lot of people, especially people with larger families, are going to have to look for affordable options in order to stay on budget,” says Kennedy. “I definitely think people are going to be watching where they place their food dollars more closely.” Inexpensive protein sources, like tinned fish and canned beans and legumes, could become more popular, while more expensive cuts of meat might take a back sea",
    },
    {
      id: 24,
      ide: 2,
      cat: "Food",
      for: "ArticleList",
      date: "MAY 8, 2023 ",
      sp: "home-latest",
      img: "https://img.etimg.com/thumb/msid-102509452,width-650,height-488,imgsize-109098,,resizemode-75/plant-based-diet.jpg",
      title: "Balancing health & planet: Benefits of choosing plant-based diet",
      Overview:
        "One thing much of the country seems to agree on is eating more plants. More than half of Americans (63 percent, regardless of political affiliation, according to a 2021 study by the Yale Program on Climate Change Communication) are actively trying to eat less red meat. In the United States, plant-based products grew into an $8 billion industry in 2022, with a growth rate of 7percent since the year before.",
      description:
        "Veganism is a moral philosophy based on animal rights that abstains from all animal products, including meat, dairy, eggs, honey and products containing leather, silk or wool, or that have been tested on animals.Veganism is a moral philosophy based on animal rights that abstains from all animal products, including meat, dairy, eggs, honey and products containing leather, silk or wool, or that have been tested on animals",
    },

    {
      id: 25,
      ide: 3,
      cat: "Food",
      for: "ArticleList",
      date: " MAY 1, 2023",
      img: "https://pinchofyum.com/wp-content/uploads/Stephs-Chickpea-Curry-Square-960x960.png",
      title: "Steph’s Chickpea Curry with Spinach and Rice",
      Overview:
        "Amazingly creamy, saucy chickpea curry served over rice with a dollop of chili crisp and a side of cucumber salad. Ready in 20 minutes!",
      description:
        "This chickpea curry is, well, it’s everything. It’s cozy, it’s pantry-friendly, and maybe even a little elegant? *hair toss* even though it’s super super easy? It’s comforting without being heavy, nutritious without being boring, and beautiful without being high maintenance. \n\n I came into this realization too late to include it in the photos here, but serving this with a little side of pickled cucumber salad (sliced cucumbers, sliced red onion, white vinegar, olive oil, salt, and sugar) is *chef’s kiss* SOS perfection.\n\n With or without the cucumber salad, I can definitely say that swooping the wooden spoon leisurely through that luscious sauce, piling the saucy goodness of chickpeas and spinach over steaming rice, and then drizzling the chili crisp (affiliate link) over the whole thing… it’s definitely a living-my-best-life type moment.",
    },

    {
      id: 26,
      ide: 4,
      cat: "Food",
      for: "ArticleList",
      date: "APRIL 25, 2023 ",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      title: "Join Us for Three Weeks of Meal Plans",
      Overview:
        "Three weeks, three meal plans, everything you need to make getting dinner on the table each night easy, doable, and delicious. Join us!",
      description:
        "Ahhhhh, summer. We love to love it and also how are there this many end-of-school projects and assemblies and how am I supposed to rush to one more dance class and why do I feel like I want to do anything else besides cook when it’s this nice out. ",
    },

    {
      id: 27,
      ide: 5,
      cat: "Food",
      sp: "home-latestArt",
      for: "ArticleList",
      date: " APRIL 24, 2023",
      img: "https://www.fabhotels.com/blog/wp-content/uploads/2022/07/veg-parantha-1.jpg",
      title: "Veg Kebab Paratha ",

      Overview:
        "This popular vegetarian breakfast is prepared by stuffing soft rumali rotis with some crispy and flavoursome kebabs. Veg kebab paratha is best enjoyed with a hot cup of tea or coffee. Although a popular breakfast item in the city, it makes for a good evening snack as well.",
      description:
        "Ever heard of something like this before? Well, veg kebab paratha is one of the most loved street foods not only in Lucknow but in all of Uttar Pradesh. This popular vegetarian breakfast is prepared by stuffing soft rumali rotis with some crispy and flavoursome kebabs. Veg kebab paratha is best enjoyed with a hot cup of tea or coffee. Although a popular breakfast item in the city, it makes for a good evening snack as well. And apart from veg kebab parathas, you must try vegetarian kebab rolls, a variant of this famous Lucknowi street food This popular vegetarian breakfast is prepared by stuffing soft rumali rotis with some crispy and flavoursome kebabs. Veg kebab paratha is best enjoyed with a hot cup of tea or coffee. Although a popular breakfast item in the city, it makes for a good evening snack as well. ",
    },

    {
      id: 28,
      ide: 6,
      cat: "Food",
      for: "ArticleList",
      date: "APRIL 17, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/Red-Chile-Tostadas-with-Eggs-Square-960x960.png",
      title: "Red Chile Tostadas with Eggs",
      Overview:
        "We’re making Red Chile Tostadas with Eggs! We’re talking creamy, crunchy, drippy, and tangy – the absolute perfect flavor combination.",
      description:
        " The combination of flavors and textures is unmatched, plus so many of these things can be made ahead or store-bought (the enchilada sauce, the refried beans, the tostada if you want). It is my perfect food combination: something creamy, something crunchy, something tangy, and something drippy and messy to really make you feel alive. \n\n I have eaten (slash, continue to eat) these for ANY meal of the day, which is another reason why I love them. They are breakfast, brunch, lunch, and dinner all in one cute, crunchy little package. \n\n I hope you love these as much as I do – and if you do, these cauliflower tostadas with queso are your next stop! ",
    },

    {
      id: 29,
      ide: 7,
      cat: "Food",
      for: "ArticleList",
      date: "APRIL 10, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/Cilantro-Orange-Chicken-61-Square-960x960.jpg",
      title: "Cilantro Orange Chicken with Rice and Beans",
      Overview:
        "This golden Cilantro Orange Chicken is so flavorful, crisped to golden brown perfection, and just very finger-licking good! Served with rice, beans, and a quick homemade pineapple salsa.",
      description:
        "This is a brand new recipe that’s part of our Spring 2023 SOS Series – in other words, EASY recipes! View our full collection of SOS recipes here.\n\n This post contains referral links for products we love. Pinch of Yum earns a small commission on these links at no cost to you, and the links will always be marked with an asterisk. We ♡ honesty! ",
    },

    {
      id: 30,
      ide: 8,
      cat: "Food",
      for: "TheTopList",
      sp: "home-ToplistA",
      date: " APRIL 3, 2023",
      img: "https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-27.jpg",
      title: "Butter Chicken Meatballs",
      Overview:
        "These butter chicken meatballs are covered in a rich and mildly spiced tomato gravy that is made luxurious with just a little bit of butter and cream. Serious weeknight magic!",
      description:
        "Butter chicken, but make it meatballs!\n\n Oh my goodness, it’s so good! My family is truly in love with this recipe.\n\n These butter chicken meatballs are covered in a rich and mildly spiced tomato gravy that is made luxurious with just a little bit of butter and cream. It is a thing of beauty. I look forward to dinner all day long when I know we are having this. And as I’m sure you imagine, the leftovers are even better, so lunch the next day is something to look forward to, too.\n\n You can make it on the stovetop or in the Instant Pot, and you can use a regular or immersion blender to get your sauce nice and creamy. I often have a batch of baked chicken meatballs on hand so I like to use those, but this would be delicious and easy with some store-bought meatballs to really lock in the SOS goodness here ",
    },

    {
      id: 31,
      ide: 9,
      cat: "Food",
      for: "TopList",
      date: "MARCH 27, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/Carrot-Cake-Coffee-Cake-1-1200x1200.jpg",
      title: "Carrot Cake Coffee Cake",
      Overview:
        "Carrot Cake Coffee Cake! A super easy batter loaded with shredded carrots, topped with a thick crumbly cinnamony streusel, and finished with a melty sweet honey butter.",
      description:
        "This recipe is a fan favorite for spring and was originally published in 2021. It is also part of this year’s Spring Bucket List! Find out more about the bucket list here.\n\n I know it might be confusing – carrot cake, which is like vegetables meets cake, but also still cake, combined with coffee cake, which is also cake but the kind you can eat for breakfast and it will still be totally appropriate and, obviously, cakey? \n\n But no need to be confused. \n\n If you like a carrot cake that tastes just slightly cinnamony and teeters perfectly between springy and dense… \n\n And you like a coffee cake that is loaded with a mega amount of streusel topping… \n\n And you like cakes that look beautiful and taste even more beautiful with a proper shmear of honey butter… \n nI HELLO! Meet your one true match. This one is for you. ",
    },

    {
      id: 32,
      ide: 10,
      cat: "Food",
      for: "TopList",
      date: " MARCH 13, 2023",
      img: "https://pinchofyum.com/wp-content/uploads/Favorite-Browned-Butter-Chocolate-Chip-Cookies-1-3-800x800.jpg",
      title: "Favorite Browned Butter Chocolate Chip Cookies",
      Overview:
        "Browned butter and brown sugar caramelly goodness, crispy edges, barely thick and soft centers, and melty little puddles of chocolate chips.",
      description:
        "Browned butter and brown sugar caramelly goodness, crispy edges, barely thick and soft centers, melty little puddles of chocolate chips and sprinkles of just enough salt to cut the sweetness and make you feel like you could probably eat 5 of them.\n\n My first favorite thing about these browned butter chocolate chip cookies is that they combine the best of both the thin-cookie and thick-cookie worlds with that satisfying little crunch around the edge AND underbaked centers that are thick enough to really sink your teeth into. Best. Of. Both. Worlds. \n\n My second favorite thing about these cookies is that they also just shine, and I mean really shine, with rich, deep, caramelly flavor thanks to a whole lot of browned butter. ",
    },

    {
      id: 33,
      ide: 11,
      cat: "Food",
      for: "TopList",
      date: "MARCH 6, 2023 ",
      img: "https://pinchofyum.com/wp-content/uploads/salmon-burgers-on-a-plate-800x800.jpg",
      title: "Yummy Salmon Burgers with Slaw",
      Overview:
        "These salmon burgers are THE YUMMIEST! and made with just five ingredients. The best for a quick + easy high protein lunch or dinner.",
      description:
        "These salmon burgers. They are just so extremely good.   We’re talking crispy outsides, flaky insides, and a perfect golden color, not to mention lots of nutrition, THANK YOU SALMON. \n\n They are also easy to make and require (usually) minimal, if not zero, grocery shopping, assuming you keep a decently stocked pantry. I love, love, love these crispy pan-fried little guys. \n\n And as if the salmon burgers weren’t good enough already to eat on their own (which, um, they are), I need you to make this slaw to serve your salmon burgers in/on/around. It is nothing fancy – just a shredded cabbage, yogurt, herbs, garlic, and vinegar situation, but paired with the salmon burgers? The crispy-salty-tangy combo is an ON-POINT combo. ",
    },

    {
      id: 34,
      ide: 1,
      cat: "Fitness",
      for: "ArticleList",
      date: "25/05/23  ",
      img: "https://5.imimg.com/data5/TX/OK/MY-3081698/cable-pulley-machine-500x500.jpg",
      title: "TCables and pulleys",
      Overview:
        "They work on your upper body and are a great way to do isolation exercises. As already mentioned, when complemented with barbells and dumbbells, they provide a full range of motion and keep your muscles entertained.",
      description:
        " Essentially, any machine that has a cable and wheels falls into this category.They work on your upper body and are a great way to do isolation exercises. As already mentioned, when complemented with barbells and dumbbells, they provide a full range of motion and keep your muscles entertained.Suggested exercises:.",
    },
    {
      id: 35,
      ide: 2,
      cat: "Fitness",
      for: "ArticleList",
      date: " 25/05/23 ",
      img: "https://assets.precisionnutrition.com/2023/02/motivational-interviewing-fb-768x403.jpg",
      title: "CHEST PRESS MACHINE",
      Overview:
        "if you’re looking for easy to use exercise equipment that targets your upper body, then you should try out the chest press machine. This machine involves you sitting upright and you using your arms to push a load with a weight plate away from your chest and back to where you are. Compared to other types of machines, a chest press machine allows you to utilize lifting heavy weights with full support and control!",
      description:
        "sing a chest press, you get specifically target and work out your chest, biceps, back, deltoids and shoulders. It’s often hard to predict what will be used in your workout as the areas targeted can differ due to the model of the chest press and the angle you’re sitting to use it. Most of the time, this machine causes an even workout across all of your upper body. Commercial Gyms – this is an effective workout that is often the most suitable for a commercial gym, but not for home use, as the machine tends to be quite bulky in size. If you have the space in your home, you can also have this machine, but many people try to do without it by using different types of free weight, dumbbell or a barbell for a chest press.",
    },

    {
      id: 36,
      ide: 3,
      cat: "Fitness",
      sp: "home-latest",
      for: "ArticleList",
      date: "25/05/23  ",
      img: "https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg",
      title: "Health And Fitness:",
      Overview:
        "Good health isn’t just about your cholesterol levels, body composition, and fitness level. Here’s a deeper look.",
      description:
        " When most people hear that question, they immediately think about their blood work or maybe a nagging problem, like back pain or heartburn or migraines. Others might focus on a fitness achievement: “Just completed my third marathon this year. Never been healthier!” \n\nMany people simply consider their weight or overall appearance: \n\n [pinches stomach] “I’m still using the same belt hole I used in my twenties, so I must be healthy, right?”",
    },
    {
      id: 37,
      ide: 4,
      cat: "Fitness",
      for: "ArticleList",
      date: "25/05/23  ",
      img: "https://c8.alamy.com/comp/2E1NCAA/six-characteristics-of-quality-care-2E1NCAA.jpg",
      title: "How to Become a Sucessfull Female Blogger",
      Overview:
        "Losing 10 pounds. Running a half marathon. Getting six-pack abs. How do you turn short-term client goals into something meaningful, sustainable, and inspiring?",

      description:
        "superficial physical goals into substantive life gold? \n\n After working with over 100,000 clients, we believe you can get more ambitious—and be more effective and fulfilled—with an approach that goes far beyond the superficial. \n\n It’s called coaching for Deep Health.\n\n This is when all dimensions of health are in sync, instead of just the physical.\n\nIt’s not only about how your clients look or perform.\n\nIt’s also about how they think, respond, solve problems, and deal with the world around them.\n\n“Wait,” you might say. “I’m all for Deep Health, but my 4pm is here and they want to lose 20 pounds.” \n\n Coaching for Deep Health will help you get them there faster and more easily than ever before—in a way that fits their life and is sustainable. ",
    },
    {
      id: 38,
      ide: 5,
      cat: "Fitness",
      for: "ArticleList",
      sp: "home-latestArt",
      date: "25/05/23  ",
      img: "https://media.self.com/photos/5788e78f737bb3be07fb961f/master/w_1600%2Cc_limit/moves-correct-form_feat1.jpg",
      title: "Keep Your Body Moving",
      Overview: "Find out your body percentage and how it affects your health.",
      description:
        "Want to know your body fat percentage? This free body fat calculator estimates it instantly, using three scientifically validated formulas.\n\n But that’s just for starters: Our body fat calculator does way more than spit out numbers.\n\n In addition to getting your body fat percentage estimate, you’ll also receive a FREE report that’ll help you understand what your results REALLY mean—and what you should do next to reach your health and fitness goals. ",
    },
    {
      id: 39,
      ide: 6,
      cat: "Fitness",
      for: "ArticleList",
      date: " 25/05/23 ",
      img: "https://assets.precisionnutrition.com/2023/01/blood-sugar-chart-1200-630-1-768x403.jpg",
      title: "Muscle Activation",
      Overview:
        "Just because you can track your blood sugar levels doesn’t mean you…",
      description:
        "Continuous glucose monitors were developed for people with type 1 and type 2 diabetes. The devices typically attach to the upper arm via skin-piercing filaments. They’re kept in place with an adhesive that makes them look like a nicotine patch. \n\n Continuous glucose monitors help people with diabetes identify swings in blood sugar before they cause problems. For those who depend on insulin, the CGM device can help their doctor modify the dose. \n\n It was only a matter of time until people without diabetes began exploring the potential of CGMs to help them meet their goals. \n\n An endurance athlete, for example, might want to know if continuous glucose monitors could help them maintain steady fuel levels. ",
    },
    {
      id: 40,
      ide: 7,
      cat: "Fitness",
      for: "ArticleList",
      date: " 25/05/23 ",
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Gym Streak",
      Overview:
        "Give your clients a jumpstart on their goals, any time of the year.",
      description:
        "Suppose you set a New Year’s resolution to start running. \n\n In your mind, your “old self” (the one glued to the couch) expires December 31. Your new self (the one who runs!) begins January 1.\n\n Because your brain distinguishes between these two selves, it’s much easier to believe that your “new self” will succeed.\n\n That might sound silly: After all, you won’t actually magically transform the moment the ball drops on New Year’s Eve or a new calendar day dawns.\n\n  But human psychology is a funny thing, and this separation of self enables us to release ourselves from our past “failures,” and believe that a different way forward is possible.\n\n That belief is critical for behavior change.\n\n “When we believe we can get better at something, we develop self-efficacy,” says Dr. Nordin. “Self-efficacy leads to increased motivation, enabling us to tackle the challenges in front of us, which ultimately leads to behavior change.” ",
    },
    {
      id: 41,
      ide: 8,
      cat: "Fitness",
      for: "TheTopList",
      sp: "home-ToplistA",
      date: "25/05/23 ",
      img: "https://images.pexels.com/photos/4098228/pexels-photo-4098228.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Market of Indian Gym Equipments",
      Overview:
        "These are the challenges most likely to plague your clients—and maybe you, too. Here’s a round-up of sage advice.",
      description:
        "The relationship between stress and health has gained a lot more attention and validity in the past 30 years.\n\n As a result, you’ve likely learned to associate stress with all kinds of terrible things: heart attacks, hair loss, early death.\n\n And while excessive, unrelenting stress definitely erodes health, let’s clear something up:\n\n Not all stress is bad.\n\n In fact, in order to thrive, we actually need some stress to feel juicy, purposeful, and alive. ",
    },
    {
      id: 42,
      ide: 9,
      cat: "Fitness",
      for: "TopList",
      date: " ",
      img: "https://assets.precisionnutrition.com/2022/11/sleep-problems-fb-768x403.jpg",
      title: "Science-based solutions to the most vexing sleep",
      Overview:
        "if BILLIONS of people are wondering why they can’t sleep, why they keep waking up at night, what they can do to fall asleep faster, and how long they should be sleeping, your clients are wondering, too.",
      description:
        "Google hears about everyone’s sleep problems, at all hours of the night. \n\n And chances are, if BILLIONS of people are wondering why they can’t sleep, why they keep waking up at night, what they can do to fall asleep faster, and how long they should be sleeping, your clients are wondering, too.\n\n In this article, we’re going to cover everything you need to know about the sleep problems your clients are likely to struggle with the most, along with science-supported practices that can help.\n\n In this article, we’ll try to give you some resources to do that.  ",
    },
    {
      id: 43,
      ide: 10,
      cat: "Fitness",
      for: "TopList",
      date: "25/05/23  ",
      img: "https://assets.precisionnutrition.com/2022/10/what-is-a-wellness-coach-fb-768x403.jpg",
      title: "Wellness coaching",
      Overview:
        "Make time for sweating, meditating, time in nature—whatever helps you feel recharged and strong.",
      description:
        "When you think of your health, you might consider your blood pressure, cholesterol levels, and other physical markers that your primary care doc would examine at a regular check up. You might also think of the quality of your sleep, diet, or exercise.\n\n While “wellness” includes physical health, it’s more of a holistic concept that also captures mental, emotional, and spiritual / existential well-being. ",
    },
    {
      id: 44,
      ide: 11,
      cat: "Fitness",
      for: "TopList",
      date: "25/05/23 ",
      img: "https://assets.precisionnutrition.com/2022/07/TWITTER-lose-weight-id1325862997-768x384.jpg",
      title: "Lose 50, 75, 100+ pounds ",
      Overview:
        "Use these mindset strategies to get through the grind—and finally meet your best-feeling body.",
      description:
        "Rather, it’s about three people who kept going—overcoming the nearly universal setbacks and challenges during major body transformations.\n\n Not only did all three eventually lose 80-plus pounds apiece, but they also changed in other ways: Dom, Stephen, and Katey have all become certified health and nutrition coaches who now help others eat, move, and live better. \n\n In this story, you’ll discover their top mindset strategies for persevering when fat loss feels impossible (or at least just very frustrating). ",
    },
    {
      id: 45,
      ide: 1,
      sp: "home-ban",
      cat: "Technology",
      for: "ArticleList",
      date: "BY SCOTT STEIN ",
      img2: "https://www.artificialintelligence-news.com/wp-content/uploads/sites/9/2023/08/sec-gary-gensler-ai-artificial-intelligence-legal-law-finance-automation-2048x1364.jpg",
      img: "https://www.artificialintelligence-news.com/wp-content/uploads/sites/9/2023/08/sec-gary-gensler-ai-artificial-intelligence-legal-law-finance-automation-2048x1364.jpg",
      title: "SEC turns its gaze from crypto to AI",
      Overview:
        "US Securities and Exchange Commission (SEC) chairman Gary Gensler has announced a shift in focus from cryptocurrency to AI..",
      description:
        "Gensler, who has been vocal about the risks and challenges posed by the cryptocurrency industry, now believes that AI is the technology that “warrants the hype” and deserves greater attention from regulators.Gensler’s interest in AI dates back to 1997 when he became intrigued by the technology after witnessing Russian chess grandmaster Garry Kasparov’s infamous loss to IBM’s supercomputer, Deep Blue.As an MIT professor, Gensler delved deeper into the study of AI, co-authoring a significant paper in 2020 that highlighted the risks posed by deep learning in the financial system.His concern over the potential implications of mass automation using AI in the finance sector has led him to reevaluate regulatory approaches. Gensler believes that while AI can bring immense benefits to financial firms and their clients through enhanced predictive capabilities, it also carries significant risks that need to be addressed.“Mass automation can have cascading implications for trillions of dollars in assets that trade on markets overseen by the SEC,” warns Gensler.One of Gensler’s key concerns is the potential use of AI to obscure responsibility and accountability when things go wrong. Coordinating AI models among major trading houses could lead to increased market volatility and instability, a phenomenon that current regulatory regimes might not be equipped to manage.As a result, Gensler has taken a proactive step by proposing one of the first regulatory frameworks for AI in the finance industry. His proposal requires trading houses and money managers to carefully evaluate their use of AI and predictive data to identify any conflicts of interest, especially when the interests of clients clash with company profits.However, this shift in focus does not mean the SEC is easing its crackdown on cryptocurrencies. ",
    },
    {
      id: 46,
      ide: 2,
      cat: "Technology",
      sp: "home-latest",
      for: "ArticleList",
      date: "BY SCOTT STEIN ",
      img: "https://www.livemint.com/lm-img/img/2023/06/01/1600x900/Mark_1685639480886_1685639486515.jpg",
      title:
        "BackMark Zuckerberg shares glimpses of Quest 3 mixed reality headsets. Check price, launch details and more",
      Overview:
        "Meta's next headset should be a lot less expensive than Apple's, and is arriving this year. Could it have an edge?",
      description:
        "This has been a big year for new VR headsets: the PlayStation VR 2 and Vive XR Elite are already here, and Apple's mixed reality headset should be announced in a matter of weeks. The biggest product of all of them, however, could be the Meta Quest 3.\n\n Meta's sequel to the most popular VR headset in the world right now will be a 2023 product, and Meta's Mark Zuckerberg has already confirmed it will be priced similarly to the Quest 2. That should mean it'll be a far more affordable headset than what Apple is readying. ",
    },
    {
      id: 47,
      ide: 3,
      cat: "Technology",
      for: "ArticleList",
      sp: "home-latestArt",
      date: "BY LISA ",
      img: "https://www.cnet.com/a/img/resize/73625a8995e607199f6dddd72cc61efc5198aaf9/hub/2022/11/07/2c677602-0215-4228-9f2a-b00c8b0c8eed/vpn-blue-blue-blue-too.jpg?auto=webp&fit=crop&height=1200&width=1200",
      title: "Best VPN Deals: Get Top VPNs Starting at Less Than $2 a Month",
      Overview:
        "With these discounts, you can get a top VPN like ExpressVPN, Surfshark or NordVPN at a great rate.",
      description:
        "With cybercrime rates on the rise, it's more important than ever to protect yourself online. You should always exercise caution when opening links and visiting unvetted websites, but for true security, you'll want to use a VPN, or virtual private network. A VPN creates an encrypted connection between your devices and the internet, which allows you to browse securely and keep your sensitive data away from prying eyes. We've tested out and rounded up some of the the best VPNs available in 2023, and now we've short-listed some of the best offers you can get right now to help you sign up with a VPN service at a low price. \n\n There are many good reasons to use a virtual private network. For example, did you know your internet service provider amasses as much data as possible on your digital activity? A 2021 Federal Trade Commission report noted that the leading ISPs have gathered user data on topics as personal as race, sexual orientation and real-time location. They've combined it, cross-referenced it and shared it with third-party partners. Yikes.",
    },
    {
      id: 48,
      ide: 4,
      cat: "Technology",
      for: "ArticleList",
      date: "BY LISA ",
      img: "https://www.cnet.com/a/img/resize/667b3a76dd0865b1a63a5fb2efdc3eff4bb2b04c/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&fit=crop&height=108&width=196",
      title: "The Pixel 7A Raises the Bar for the Pixel 8",
      Overview:
        "Commentary: The Pixel 7A proves that Google needs to do more to separate its main Pixel phone from its more budget-friendly option.",
      description:
        "The Pixel 8 didn't make an appearance at Google's I/O conference, but the company did launch the Pixel 7A -- its budget-minded alternative to the Pixel 7. That's a win for Pixel fans, since the 7A offers many of the same benefits as the Pixel 7 -- including a great camera and the new Tensor G2 processor -- for $100 less. \n\n  But it also makes me wonder whether Google's A-series phones are beginning to overshadow its flagship Pixels. \n\n   Now that Google has narrowed the gap between the Pixel 7 and 7A, it should think more carefully about its target audience for the Pixel 8. If the Pixel 7A is for those who want a basic Pixel experience without compromising on performance and camera quality, and the Pixel 7 Pro is for photography enthusiasts, then who's the Pixel 7 for? That's the question I'm hoping Google answers with the Pixel 8, along with some other routine improvements to software support and battery life.  \n\n  Google typically releases new Pixel phones in the fall, so we're expecting to learn more about the Pixel 8 in a few months. ",
    },
    {
      id: 49,
      ide: 5,
      cat: "Technology",
      for: "ArticleList",
      date: " BY SCOTT ",
      img: "https://www.cnet.com/a/img/resize/abf6551eab5adc5cee46eb4102842de09f2d596f/hub/2023/05/17/5c9f2a28-c920-49fe-b508-98337d5033ed/spacetop-ar-laptop.jpg?auto=webp&fit=crop&height=228&width=416",
      title: "I Tried an AR Laptop. It's Way Ahead of Its Time",
      Overview:
        "The Spacetop is like a Chromebook for AR headsets. With Apple's hardware looming, it also feels like a reminder of how computers could change.",
      description:
        "A small keyboard and trackpad lies in my lap. But there's no screen. Not that you can see, anyway. To me, I have a curved wraparound workspace with dozens of windows open. I'm seeing it on a pair of AR glasses (with prescription inserts) perched on my nose. \n\n I first tried the Spacetop in Las Vegas back in January, but the company that developed it, Sightful, is finally announcing the early-access product experiment now. I've seen tons of AR and VR headsets, but very few unique peripherals designed to work together with these future goggles and glasses. Instead of gaming or social experiences, Spacetop's main pitch is to turn laptops into AR-assisted devices with endless virtual displays. \n\n If that sounds like a weird pitch, consider that I've already lived it. I've paired Meta's Quest Pro to my laptop to extend its virtual monitors around my head, and plenty of solutions like this already exist using available apps. The interfaces can be clunky, and the hardware isn't totally made to be mobile. Spacetop's keyboard base, with its own Qualcomm processor inside, acts as a spatially tracked anchor that the AR glasses can follow and track the floating displays to. The tracking can work while in motion in a car or plane, and a button on the keyboard can make the floating displays vanish for an in-room conversation with someone, toggling the virtual screens on and off.  ",
    },

    {
      id: 50,
      ide: 6,
      cat: "Technology",
      for: "ArticleList",
      date: " BY DANIEL",
      img: "https://hackensackmeridianhealth.org/-/media/project/hmh/hmh/public/healthu/hearing.jpg",
      title: "Advice for Buying Hearing Aids",
      Overview: "Hearing aids are getting cheaper and more accessible.",
      description:
        " Between pounding jackhammers and screeching machinery, the cacophony of a construction site is unpleasant to most. Not to Christine, an 18-year-old from Alabama. After getting her first pair of hearing aids, Christine found the noises profound.\n\n 'It was surprising to stop and hear what things actually sound like to other people,' she said. 'I sat down beside a construction site just to hear the different noises. I like to listen to the machines running. My favorite is the 18-wheelers driving around the site'. \n\n  'The rumble sounds better than before.'\n\n  Christine struggled to hear out of her left ear for her whole life. In March, she was prescribed her first pair of hearing aids. In addition to dramatically improving her hearing, they also notably improved her balance. \n\n Christine is one of the 38 million Americans who have some degree of hearing loss. Hers was genetic, but many more are put at risk by exposure to loud noises. The World Health Organization estimates that over a billion young adults are at risk of hearing loss 'due to unsafe listening practices.' ",
    },
    {
      id: 51,
      ide: 7,
      cat: "Technology",
      for: "ArticleList",
      date: "BY MEARA ",
      img: "https://www.searchenginejournal.com/wp-content/uploads/2023/05/official-openai-chatgpt-app-for-ios-iphone-646674ba28e23-sej.jpg",
      title: "Breaking news for apple users ",
      Overview: "OpenAI says an Android app is coming 'soon.'",
      description:
        "OpenAI continues to develop ChatGPT -- the company began rolling out plugins for the AI chatbot last month -- but has denied it's working on GPT-5 yet following an open letter signed by Elon Musk, Steve Wozniak and others at the end of March. The letter urged labs to take at least a six-month pause in artificial intelligence development due to the 'profound risks' to society.\n\n In February, Microsoft entered the AI chatbot realm with Bing AI search, which makes use of ChatGPT, and for which Microsoft earlier this week launched widgets on Android and iOS. Rival Google followed with AI Bard in March. The waitlist to try Bard has now been removed, with the service publicly available as of this week. \n\n Chinese giant Alibaba also unveiled a ChatGPT rival, with both Chinese and English capabilities, while Tesla and Twitter CEO Elon Musk has created an artificial intelligence company called X.AI. \n\n CNET has broken down the performance of ChatGPT, Bing and Google Bard to work out which AI chatbot is the most helpful. ",
    },
    {
      id: 52,
      ide: 8,
      cat: "Technology",
      for: "TopList",
      date: " BY LINDSAY ",
      img: "https://www.cnet.com/a/img/resize/8a3e82c2ee427cd4c9e6d850c7361d8be08b8fea/hub/2023/03/06/aa40eda8-8fed-429d-a9d9-96f1e9ed464c/red-coupon-1.png?auto=webp&fit=crop&height=173&width=308",
      title:
        "CNET's Free Shopping Extension Saves You Time and Money. Give It a Try Today",
      Overview:
        "No one likes to pay full price -- and that's what the CNET Shopping extension is here to help prevent.",
      description:
        " Spring has sprung, and the weather is warming up across most of the country. Now's a perfect time to upgrade your outdoor gear with a new grill, maybe some patio furniture. Or maybe you just want to stay inside and splurge for a new TV. Regardless of what you're looking for, the one thing you need to be worried about is the price, and ensuring you find the best one available -- and that's where CNET Shopping comes in.\n\n  This free-to-use browser extension (which was previously known as PriceBlink) works in the background and helps find you the best price as you browse products of interest -- whether it be a coupon code or a discount at another retailer.",
    },
    {
      id: 53,
      ide: 9,
      cat: "Technology",
      for: "TheTopList",
      sp: "home-ToplistA",
      date: "BY EDWARD  ",
      img: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/XYUYQLWLBJIYXLGXUWMVC4OG6I.jpg",
      title:
        "AI Draws Attention at G-7 Summit, With Leaders Calling for Guideline",
      Overview:
        "The leaders of the Group of Seven nations say we need to develop an international, framework to achieve the common vision and goal of trustworthy AI.",
      description:
        " The heads of the G-7 countries -- Canada, France, Germany, Italy, Japan, the UK and the US (plus the EU) -- called for a G-7 working group to establish by the end of the year the Hiroshima AI process, for carrying out talks about how best to deal with chatbots, image generators and other AI technologies. The talks would center on developing an international framework 'to achieve the common vision and goal of trustworthy AI,' the bulletin says.\n\n 'These discussions could include topics such as governance, safeguard of intellectual property rights including copy rights, promotion of transparency, response to foreign information manipulation, including disinformation, and responsible utilization of these technologies,' the bulletin says.\n\n Though it's unclear what exactly might come of the talks, the G-7's focus on AI is another sign that people in high places are aware of the worries around the technology and are cautious about letting its development continue unfettered. The G-7's bulletin follows other recent moves by government to examine and address AI and its potential perils.",
    },
    {
      id: 54,
      ide: 10,
      cat: "Technology",
      for: "TopList",
      date: " BY JAMES ",
      img: "https://www.cnet.com/a/img/resize/7042b185e1526331c69c00332cd47d6aa456356a/hub/2023/05/11/65526df6-f863-45fa-95a0-4d05465a799e/google-io-2023-051023-66.jpg?auto=webp&fit=crop&height=362&width=644",
      title:
        "Google's AI Search Could Mean Radical Changes for Your Internet Experience",
      Overview:
        "At Google I/O, the company unveiled an experimental version of Search that integrates AI-generated responses. Will it break the balance of the internet?.",
      description:
        "The future of Google Search is a big green box. \n\n That's exactly what Google showed off this month at Google I/O, the company's yearly developer conference. The theme for 2023 was AI, a term mentioned more than 140 times during the two-hour keynote presentation. Google unveiled AI products that will actually be released to the public, an about-face for the apprehensive internet giant in response to growing competition. \n\n  Late last year, OpenAI launched ChatGPT to near-universal adulation. Suddenly, everybody had access to a generative AI engine that could seemingly answer any question with a novel response. It's powered by a large language model, or LLM, that essentially lets it act as 'autocomplete on steroids,' using massive amounts of text data to figure out what the next best word should be.  \n\n  The power and ease of ChatGPT helped it become the fastest growing consumer web platform ever. It prompted Microsoft to up its investment into OpenAI and integrate ChatGPT's tech directly into Bing search earlier this year, a move that helped the company see a 16% increase in traffic. The day before Microsoft unveiled Bing AI, Google announced its own generative AI engine, Bard, although it flubbed the launch and lost $100 billion in stock market value in the process. The stock has since rebounded to its highest level so far this year. \n\n  In many ways, Google I/O was a referendum on the company's wonky entrance into consumer AI and a clear message to skeptics (and investors) that it's willing to take radical steps to stay at the forefront of internet search, even if that means upending its core product. Google Search has long been the engine for how we all look for product information, find the latest news and otherwise interact with the internet, and for how many businesses make money. ",
    },
    {
      id: 55,
      ide: 11,
      cat: "Technology",
      for: "TopList",
      date: "BY SCOTT ",
      img: "https://www.cnet.com/a/img/resize/08bdf2e50a92a72d0c091f914b295afb3e91809d/hub/2022/06/07/ef7b8ffd-9c0a-4afa-afef-2cea54ba4ace/apple-security-privacy-blue.jpg?auto=webp&fit=crop&height=362&width=644",
      title: "Download iOS 16.5 Right Now",
      Overview:
        "The update fixes a few security issues that might be actively exploited.",
      description:
        "The latest iPhone update patches almost 40 issues and bugs, Apple said in its patch notes, including three security issues that might be actively exploited. These three security issues relate to WebKit, the internet browser engine used in Safari and developed by Apple. \n\n One of these issues could disclose sensitive information to a third party, and another could allow a third party to execute commands on your device without your knowledge. Fixes for these issues are in 16.5 for anyone who missed the release of the first iPhone Rapid Security Response, iOS 16.4.1 (a). The third issue could allow a third party access to more information across your device than is allowed.\n\n The iOS update also patches an issue where someone could access your contacts from your lock screen. While Apple has provided ways to customize your lock screen, some people have run into issues where the lock screen can allow others to access some iPhone features, like replying to messages and even your Wallet.",
    },
  ]);

  return (
    <AppData.Provider value={[data, setdata]}>
      {/* <Home/> */}
      {props.children}
    </AppData.Provider>
  );
}

export default Store;
