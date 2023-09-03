import '../styles/Home.css';
import { Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { GithubIcon, DiscordIcon, EmacsIcon, ObsidianIcon } from '../components/Icons';
import Waitlist from '../components/Waitlist';
import Icon from '@ant-design/icons';
import { TypeAnimation } from 'react-type-animation';
import { DISCORD_LINK, DEV_DOCS } from '../common/constants';
import ChatBubbles from '../components/ChatBubbles';

export function Home() {

	const showcaseRolesComponent = () => {
		return(
			<TypeAnimation
				cursor={true}
				repeat={0}
				omitDeletionAnimation={true}
				speed={50}
				sequence={[
					500,
					"I'm a writer and I want to build my character's backstory",
					1000,
					"I'm a software engineer and I want to search my commit logs",
					1000,
					"I'm a chief of staff and I want to create my organization's OKRs",
					1000,
					"I'm a cancer researcher and I want to query papers about melanoma",
					1000,
					"I'm a student and I want to revise my notes about the Krebs cycle",
					1000,
					"I'm a person and I want to do more.",
					500,
				]} />
		);
	}

	function copyToClipboardAction() {
		const codeSnippetElements = document.getElementsByClassName('self-host-code');
		const codeSnippet = Array.from(codeSnippetElements).map((element) => element.textContent?.split('$')[1].trim()).join('\n');
		navigator.clipboard.writeText(codeSnippet).then(() => {
			console.log('Copied to clipboard');
		})
		.catch((error) => {
			console.error('Failed to copy: ', error);
		});

		const copyButton = document.getElementById('copy-self-host-button');
		if (copyButton) copyButton.textContent = 'Copied!';
	}
	
	const conversation = [
		{
			"you": "Hey Khoj, where did I visit in San Diego?",
			"khoj": "According to your notes and documents, you visited Balboa Park, Sunset Cliffs, and went surfing in Torrey Pines. What else can I help you with?",
		},
		{
			"you": "Remind me about that surfing experience. I want to write about it.",
			"khoj": "You went surfing early on a Saturday and caught a few green waves. You mention feeling exhilirated and at peace. In your writing, you can describe the feeling as a sense of flow.",
		}
	];

	return (
		<section className='core-page'>
			<h2 className='title'>Your open-source, personal AI copilot for life</h2>
			<div className='typing-components'>
				{showcaseRolesComponent()}
			</div>
			<div className='product-description'>

				<div className="product-description-text top-section-links">
					<div className='product-description-link'>
						<Button
							type="primary"
							size='large'
							className='cta-button'
							style={{borderRadius: '4px' }}
							ghost
							icon={<Icon component={GithubIcon} />}
							href="https://github.com/khoj-ai/khoj">
								See the code
						</Button>
					</div>
					<div className='product-description-link'>
						<Button
							type="primary"
							size='large'
							className='cta-button'
							style={{borderRadius: '4px', color: 'green' }}
							ghost
							icon={<WhatsAppOutlined />}
							href="https://wa.me/18488004242">
								Chat with Khoj
						</Button>
					</div>
					<div className='product-description-link'>
						<Button
							type="primary"
							size='large'
							className='cta-button'
							style={{borderRadius: '4px' }}
							ghost
							icon={<Icon component={DiscordIcon} />}
							href={DISCORD_LINK}>
								Join us on Discord
						</Button>
					</div>
				</div>
				<div className='product-description-bubbles'>
					<ChatBubbles conversation={conversation} />
				</div>
			</div>
			<div className='camping-image-container'>
				<div className='camping-image-subcontainer'>
					<img src='/hero_camping.svg' className='hero-camping' alt='hero-camping' />
				</div>
			</div>
			<section id="mission">
				<div id="mission" className='camping-block'>
					<div className="product-description">
						<div className='production-description-subcomponent camping-description-subcomponent'>
							<h2 className='production-description-subcomponent'>What is Khoj?</h2>
							<p className='product-description-subcomponent-light'>
								Khoj is a desktop application to search and chat with your notes, documents and images.
								It is an offline-first, open source AI personal assistant that is accessible from Emacs, Obsidian or your Web browser.
								You can see our supported data sources <a className='inline-link-light' href={DEV_DOCS + "features?id=supported-data-sources"}>here</a>.
							</p>
							<p className='product-description-subcomponent-light'>
								Khoj is a thinking tool that is transparent, fun and easy to engage with.
								You can build faster and better by using Khoj to search and reason across all your data sources.
								Khoj learns from your notes and documents to function as an extension of your brain.
								So that you can stay focused on doing what matters.
							</p>
                            <p className='product-description-subcomponent-light'>
                                Khoj started with the founding principle that a personal assistant be understandable, accessible and hackable.
                                This means you can always customize and self-host your Khoj on your own machines.
                            </p>
							<h3 className='production-description-subcomponent'>Quickstart</h3>
							<p className='product-description-subcomponent-light'>
								Get started with the Khoj desktop setup in a few minutes. You have to run the following snippet from a terminal. If you're not comfortable with a terminal, we recommend you try the <a className='inline-link-light' href="https://docs.khoj.dev/#/desktop_installation">desktop installations</a>.
							</p>
							<pre className='product-description-subcomponent'>
								<button id='copy-self-host-button' onClick={copyToClipboardAction}>Copy</button>
								<code className='product-description-subcomponent' >
									<span className='self-host-code'>$ pip install khoj-assistant</span>
									<span className='self-host-code'>$ khoj</span>
								</code>
							</pre>
							<Button size="large" type="primary" shape="default" style={{borderRadius: '4px', border: '1px solid #000'} }>
								<Link className="navLinks" to={DEV_DOCS + "setup"}>Full Setup</Link>
							</Button>
                            <h3 className='production-description-subcomponent'>Current Plans</h3>
                            <p className='product-description-subcomponent-light'>
								We know that self-hosting is a blocker for folks who want an always available assistant without the hassle of setting it up on your computer.
								We've built a cloud hosted version of Khoj that will be available for personal use.
								Whether you host your own instance or use our cloud hosted version, you'll always be in control of Khoj's access to your data.
							</p>
							<p className='product-description-subcomponent-light'>
								If you're interested in trying out Khoj on the cloud, please sign up for early access below.
                            </p>
                            <p className='product-description-subcomponent-light'>
								We're in the thick of building and improving Khoj to be useful and accessible to more people, and <b>we want to hear from you.  </b> Join the <b><a className='inline-link-light' href={DISCORD_LINK}>Discord</a></b> to voice your opinions and tell us which features you'd like us to prioritize.
                            </p>
							<Waitlist />
						</div>
					</div>
				</div>
			</section>
			<div id="chat" className='product-description'>
				<div className='production-description-subcomponent-light'>
					<h2 className='production-description-subcomponent'>Chat</h2>
					<p className='product-description-subcomponent-light'>
						Khoj allows you to chat with your notes and documents. Chat completely offline for privacy or online for speed and power. It's your choice.
						Carry out natural, multi-turn conversations with Khoj to create, reason and build on top of your existing knowledge.
					</p>
					<img id="demo-video" src="https://khoj-web-bucket.s3.amazonaws.com/chatdemo.gif" alt="chat-demo" />
				</div>
			</div>
			<div id="search" className='product-description'>
				<div className='production-description-subcomponent'>
					<h2 className='production-description-subcomponent'>Search</h2>
					<p className='product-description-subcomponent-light'>
						Khoj provides lightning-fast, semantic search; results from your data sources appear as you type.
						Khoj's offline AI models allow you to use natural language to quickly find information in your documents.
						Search using terms that are similar to what you're looking for, rather than exact or fuzzy matches.
						Khoj search works offline. So if you self-host your data never leaves your machine and search works without internet.
					</p>
					<img id="demo-video" src="https://khoj-web-bucket.s3.amazonaws.com/searchdemo.gif" alt="search-demo" />
				</div>
			</div>
			<div id="plugins" className='product-description'>
				<div className='production-description-subcomponent-light'>
					<h2 className='production-description-subcomponent'>Plugins</h2>
					<p className='product-description-subcomponent'>
						Our code makes it easy to build external data and UI integrations.
						We currently maintain two major first-party plugins, <a className='inline-link-light' href="https://www.gnu.org/software/emacs/">Emacs</a> and <a className='inline-link-light' href="https://obsidian.md/">Obsidian</a>.
						All of our products are available to use via the browser or the API as well.
					</p>
					<div className='supported-icons'>
						<EmacsIcon />
						<ObsidianIcon />
					</div>
				</div>
			</div>
			<div id="team" className="product-description">
				<div className='production-description-subcomponent'>
					<h2 className='production-description-subcomponent'>Team</h2>
					<div className='founders-text'>
						<div className='founders-item'>
							<div className='founders-item-image-container'>
								<img className='founders-item-image' src='https://khoj-web-bucket.s3.amazonaws.com/deb_founder_bw.jpg' alt='Debanjum Singh' />
								<p className='founders-item-name'>Debanjum Singh Solanky</p>
							</div>
						</div>
						<div className='founders-item'>
							<div className='founders-item-image-container'>
								<img className='founders-item-image' src='https://khoj-web-bucket.s3.amazonaws.com/saba_founder_bw.jpg' alt='Saba Imran' />
								<p className='founders-item-name'>Saba Imran</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="conclude" className='product-description'>
				<div className='production-description-subcomponent-light'>
					<p className='product-description-subcomponent-light'>
						We know how hard it can be to search and engage with information across all the different platforms you use.
						We plan to fix this by making information from your chosen data sources accessible to you in a private and secure way.
					</p>
					<p className='product-description-subcomponent-light'>
						To learn more about the product, <Link className='inline-link-light' to="/about">click here</Link>.
					</p>
					<a href="https://www.ycombinator.com/companies/khoj">
						<img id='yc-logo' src="https://khoj-web-bucket.s3.amazonaws.com/backedbyyc.svg" alt="Backed by YCominbator" />
					</a>
				</div>
			</div>

		</section>
	);
}

export default Home;