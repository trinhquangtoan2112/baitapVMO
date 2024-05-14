import React from 'react'
import parse from 'html-react-parser';
import CommentComponent from '../CommentComponent/CommentComponent';

export default function ReadingCompoment() {
    return (
        <div className='reading_content'>
            <div className='reading-title'>
                <h3 className='main_title'>Judge denies Trump lawyers’ second request for mistrial in hush-money case</h3>
                <h5 className='sub-title'>Juan Merchan signals Trump lawyers to blame for letting Stormy Daniels describe lurid details of alleged sexual encounter</h5>
                <div className='content_info'>
                    <p>By: Jeremy Herb, Lauren del Valle and Kara Scannell, CNN </p>
                    <p>Updated 7:40 PM EDT, Thu May 9, 2024 </p>
                </div>
                <div className='img_info'>
                    <img src='https://i.guim.co.uk/img/media/d55c4142914531fe59a36ce7548762228849a341/501_837_3047_1829/master/3047.jpg?width=1900&dpr=2&s=none' alt='hinhanh1'></img>
                    <p className='img_title'>Donald Trump speaks to the media after a day of testimony in his trial at Manhattan criminal court on Thursday.</p>
                </div>
            </div>
            <hr></hr>
            <br></br>
            <div className='reading_content'>
                <>
                    {parse("<p>The judge overseeing Donald Trump’s criminal case in Manhattan castigated the former president’s lawyers on Thursday and denied their second request for a mistrial this week.</p> \n<p>Judge Juan Merchan indicated that Trump’s lawyers were to blame for allowing Stormy Daniels, an adult film star, to describe lurid details about her alleged sexual encounter with Trump in 2006, including testimony that Daniels nearly blacked out and that Trump did not wear a condom.</p>")}
                </>
                <div className='reading_content_img'>
                    <img src='https://i1-vnexpress.vnecdn.net/2024/05/08/AurusSenat20251-1715139859-4891-1715140063.jpg?w=500&h=300&q=100&dpr=2&fit=crop&s=C5eek_Zd2XWOs_p7fckQ8g' alt='sass'></img>
                    <h5>Train strikes halt most services in west of England, Midlands and routes to Scotland and Wales – business live</h5>

                </div>
                <>
                    {parse(
                        "<p>Trump’s attorneys have now twice used the testimony to request a mistrial, saying it biases the jury and is irrelevant to whether Trump committed the felony of falsifying business records. “It’s a dog-whistle for rape,” Trump attorney Todd Blanche said on Thursday.</p> <p>But Merchan said Blanche and Trump’s legal team had invited the salacious details to be made public in the case. In his opening statement, Blanche had said the sexual affair never happened, effectively asking the jury to believe either Trump or Daniels, Merchan said. The details Daniels could offer, Merchan said, spoke to the credibility.</p> \n<p>“Your denial puts the jury in a position of having to choose who they believe: Donald Trump, who denies there was an encounter, or Stormy Daniels, who says that there was,” Merchan said. “These details add a sense of credibility if the jury chooses to believe them.”</p> \n<p>Merchan also criticized Trump attorney Susan Necheles for not objecting when Daniels was asked whether Trump used a condom.</p> \n<p>“Why on earth she wouldn’t object to the mention of a condom, I don’t understand,” he said.</p> \n<p>Merchan declined to modify a gag order that prohibits Trump from attacking witnesses, including Daniels, and jurors. Blanche said it was unfair that Trump was not going to be given a chance to respond to attacks against him. “As we’ve said repeatedly, he needs an opportunity to respond to the American people,” Blanche said.</p> \n<p>But Merchan denied that request, saying that even if he lifted the gag order with respect to Daniels, who has now finished testifying, he was concerned about the message it would send to other witnesses.</p> \n<p>“Other witnesses, including not only Michael Cohen, will see your client doing whatever it is he intends to do,” he said. “The reason the gag order is in place to begin with is precisely because of the nature of these attacks. The nature, the vitriol … your client’s track record speaks for itself here.”</p> \n<p>Trump fumed after court wrapped for the day, telling reporters the judge was “corrupt”.</p> \n<p>Merchan’s decision came at the end of a day in which Trump’s lawyers spent hours seeking to undermine Daniels’s credibility, pressing on her motivations for agreeing to a hush-money payment as she continued critical testimony.</p> \n<p>Necheles asked Daniels to explain why she did not go public with her story in the waning days of the 2016 campaign and instead sought to get paid for it. Necheles also suggested Daniels wanted to hurt Trump because Trump opposed gay marriage and abortion.</p> \n<p>In rapid-fire questions, Necheles seemed to be trying to seed the idea that Daniels, dressed in a green blouse and black sweater, was more interested in receiving a payout than telling the truth.</p> \n<p>“You wanted money, right?” Necheles said.</p> \n<p>Daniels, who insisted she wanted to give a press conference in 2016, said, “I wanted the truth to come out”, adding that she wanted a paper trail. “I never asked for money from anyone in particular; I asked for money to tell my story.”</p> \n<p>Necheles laid out the ways Daniels had profited from her story – including a book deal, a documentary and merchandise celebrating Trump’s indictment.</p> \n<p><strong>“</strong>A large part of your livelihood, for a number of years now, has been making money off the story that you had sex with President Trump, and [that] you helped him get indicted,” Necheles said.</p> \n<p>Daniels insisted she was not profiting, but “doing her job” to fund significant legal bills.</p> \n<p>Necheles tried to poke holes in Daniels’s story about the alleged encounter, highlighting instances in which she said Daniels’s recollection had changed over the years.</p> \n<p>Daniels testified on Tuesday that she never ate dinner with Trump in his Lake Tahoe hotel room, but during a 2011 interview with InTouch magazine, <a href=\"https://www.intouchweekly.com/posts/stormy-daniels-full-interview-151788/\">she said</a>: “We ended up having dinner in the room. I cannot remember what we ordered.” Daniels also said it was Keith Schiller, Trump’s bodyguard, who had invited her to have dinner with Trump, but in the 2011 interview she suggested it was Trump himself. Daniels had also given slightly different descriptions in the past of how Trump greeted her when she said she entered his hotel suite.</p> \n<p><strong><a href=\"https://www.theguardian.com/us-news/donald-trump-trials\">Trump’s criminal hush-money trial:</a> what to know</strong></p> \n<ul> \n <li><p><strong><a href=\"https://www.theguardian.com/us-news/2024/apr/15/trump-hush-money-trial\">A guide to Trump’s hush-money trial</a> – so far</strong></p></li> \n <li><p><strong><a href=\"https://www.theguardian.com/us-news/2024/apr/15/trump-hush-money-trial-key-arguments\">The key arguments</a> prosecutors will use against Trump</strong></p></li> \n <li><p><strong><a href=\"https://www.theguardian.com/us-news/2024/apr/15/trumps-first-trial-is-starting-heres-how-itll-work\">How will Trump’s trial work?</a></strong></p></li> \n <li><p><strong>From Michael Cohen to Stormy Daniels: <a href=\"https://www.theguardian.com/us-news/2024/apr/15/key-players-donald-trump-hush-money-trial\">the key players</a></strong></p></li> \n</ul> \n<p>Daniels, who spoke quickly and appeared unfazed by Necheles’s questions, refused to concede any inconsistencies. “You’re trying to make it say that it changed, but it hasn’t changed,” she said.</p> \n<p>Necheles also suggested Daniels could make up a good story about having sex with Trump because of her experience in the adult entertainment industry. “You have a lot of experience in making phony stories about sex appear to be real,” the lawyer said.</p> \n<p>“If that story was untrue I would have written it to be a lot better,” Daniels fired back. Necheles also forced Daniels to concede she had no direct knowledge of Trump’s involvement in the $130,000 hush-money payment, but later acknowledged she became aware of it when Trump’s lawyers conceded it in a court proceeding against her.</p> \n<p>In one striking exchange, Necheles sought to question Daniels’s testimony from earlier in the week, when she said she was scared and startled when she emerged from the bathroom in Trump’s suite and found him in bed in his T-shirt and underwear. Necheles said Daniels had acted in hundreds of porn movies, and so “according to you, seeing a man sitting on a bed in T-shirt and boxer shorts was so upsetting?”</p> \n<p>Daniels said it was startling to see a much older man who she did not know well to be in such a revealing state.</p> \n<p>During redirect examination, prosecutor Susan Hoffinger asked Daniels bluntly if she was telling the truth or lies about Trump. “The truth.” Seeking to undercut testimony that Daniels had come out ahead because of the story, Hoffinger also asked Daniels whether the whole episode had been a net positive or net negative on her life.</p> \n<p>“Negative,” Daniels said.</p> \n<p>Trump arrived in court on Thursday with the Florida senator Rick Scott among his entourage, part of a parade of supporters who have come to court to back the former president. Scott left the courtroom shortly before 11am and did not return to court.</p> \n<p>Trump has been charged with <a href=\"https://apnews.com/article/donald-trump-arraignment-hush-money-81225510ef7638494852816878f612f0\">34 felony counts of falsifying business records</a> in connection with payments his lawyer Michael Cohen made to Daniels in 2016 to prevent her from speaking publicly about their alleged affair.</p> \n<p>The hush-money case is the first of <a href=\"https://apnews.com/projects/trump-investigations-civil-criminal-tracker/\">four criminal cases</a> to reach a jury against Trump but the other three have hit serious delays, which could perhaps prevent them from starting before November’s presidential election.</p>", {
                        replace(domNode) {
                            if (domNode.tagName === "a") {
                                const dataText = domNode.children[0].data;
                                return <span>{dataText}</span>;
                            }
                            if (domNode.tagName === "strong") {
                                return <span style={{ display: "none" }}></span>
                            }
                            if (domNode.tagName === "ul") {
                                return <span style={{ display: "none" }}></span>
                            }
                        }
                    })
                    }
                </>
            </div>
            <CommentComponent></CommentComponent>
        </div>
    )
}