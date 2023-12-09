import { PageContainer } from '@ant-design/pro-layout';
import { Collapse, Divider } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
const { Panel } = Collapse;

export default (): React.ReactNode => {
  const intl = useIntl();

  document.title = 'FAQ - Metal Gear Online';
  return (
    <PageContainer>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="How do I register?" key="1">
          <div>
            <p>You can register <a href="https://mgo2pc.com/register"> here </a>. It's recommended to use gmail rather than hotmail/outlook email since the latter is being blocked lately.
               Username has to be minimum 8 characters, no spaces or special characters, just letters and numbers. The same goes for the password. 
               In game the username will act as the Game ID, and the password as the password. You do not have to change your password once your account is created and you can ignore it taking you to the change of password page.
            </p>
          </div>
        </Panel>
        <Panel header="I don't get an e-mail confirmation, what do I do?" key="2">
          <div>
          You may have used a hotmail/outlook email address. 
          Thankfully, you don't need to activate the account at all. 
          Just remember the username and password, don't forget about them because otherwise you'll have to open a ticket in our <a href="https://discord.com/invite/MNqmzuW2wH">discord</a>.
          </div>
        </Panel>

        <Panel header="How do I reset my password?" key="3">
          <div>
            <p>
            If you forgot your password, you can input your email <a href="https://mgo2pc.com/recovery">here</a> and you'll receive an e-mail. Follow the link sent to you and you're done.
            </p>
          </div>
        </Panel>

        <Panel header="How to change game language?" key="4">
          <div>
            <p>
            PS3: Settings{'>'}System Settings{'>'} System Language{'>'}English(United States)
            </p>
            <p>
            PC: Select the config button{'>'}System{'>'}Console Language{'>'}English(US){'>'}Apply{'>'}Save
            </p>
            <p>
            If your language is unsupported then the game will appear in Japanese.
            </p>
            
          </div>
        </Panel>

     
    <Panel header="How to buy and apply cosmetics?" key="5">
      <div>
        <p>Login to <a href="https://mgo2pc.com/login">mgo2pc.com</a> if you have already , then go to the <a href="https://mgo2pc.com/shop">reward shop</a> and look for the gear you want to buy 
           with rewards earned from the game (no real money necessary).</p>

           <p>First, make sure you're completely logged out of the character you want to apply the cosmetic to. Then go to the shop on the website, look for the item you want to apply and click on Equip. A window will appear asking you to choose a character, once done head back to the game. Upon choosing a character, you'll see the item applied.</p>

      </div>
    </Panel>


    <Panel header="How do I open a ticket for moderation support?" key="7">
      <div>
        <p> You will have to contact staff via our <a href="https://discord.com/invite/MNqmzuW2wH">discord</a> where you will find a channel for contacting staff</p>
      </div>
    </Panel>
    <Panel header="Can my PC run this?" key="8">
      <div>
        <p>If your PC is over 5 years old (2023 as of writing), then it will not be worth it as PS3 emulation is extremely intensive. 
          For Intel, while the minimum recommended is the i5-10400, there are a few exceptions from prior generations such as the 8700k and 9900k. 
        </p>
        <p>
          For AMD, while the minimum recommended is the Ryzen 5 3600, older CPUs starting from the 2700X can still give a decent experience. 
          If your CPU is under these specifications, you may not have a good experience and it's recommended to either upgrade or get a PS3. 
        </p>
        <p>
          For GPUs, any GPU with Vulkan support will suffice except for Maxwell/900 series which crashes the emulator due to Vulkan drivers issues.
        </p>
      </div>
    </Panel>
    <Panel header="Can I play on Linux/Mac/Steam Deck/ASUS ROG Ally?" key="9">
      <div>
        <p>
          There's no custom MGO build for Linux and it is not officially supported.
        </p>
        <p>
          The state of RPCS3 on Mac is not good enough so the performance won't be enough
          to consider it playable as a result it is not supported.
        </p>
        <p>
          The Steam Deck is not powerful enough to run this game.
        </p>
        <p>
          The ASUS ROG Ally can run the game fine. Follow the standard tutorial provided for windows pc's. The only setting you may want to change is "Advanced Spurs Threads" to 3. 
          This setting can be found in the emulators config page under the advanced tab<a href="https://media.discordapp.net/attachments/817184487061454928/1181289677685280829/image.png?ex=658084be&is=656e0fbe&hm=4aed3b3b0349a3ef8aa46afff7412cc60d0cb41af146a599aa3e4d65ed755304&=&format=webp&quality=lossless">(see imagae linked)</a>.

          </p>
      </div>
    </Panel>
    <Panel header="Can I play with Mouse and Keyboard?" key="10">
      <div>
        <p>You can, but it's not recommended since the game lacks native Mouse support. A controller is recommended to play.</p>
      </div>
    </Panel>


        <Panel header={intl.formatMessage({ id: 'app.faq.donate' })} key="11">
          <div>
            <p>
            {intl.formatMessage({ id: 'app.faq.donatetab' })}
            </p>
          </div>
        </Panel>

        <Panel header="Why do I have no sound?" key="12">
  <div>
    <p>Having no sound is a sign that your CPU does not meet the requirements or poor performance. There are a few emulator settings you can change to mitigate this issue.</p>
    <ul>
      <li><strong>CPU</strong>: Prefered SPU Threads (Play with different values)</li>
      <li><strong>Audio</strong>: Increase Audio Buffering, Enable Time Stretching, Change Audio Out to Cubeb or XAudio (find what works best for you)</li>
      <li><strong>Advanced</strong>: Maximum Number of SPURS Threads (Play with different values)</li>
    </ul>
  </div>
</Panel>
<Panel header="How do I make the game fullscreen?" key="13">
  <div>
    <p>You can double click the centre of the screen or press alt+enter (<a href="https://youtu.be/eCBp_D7koWs">video tutorial</a>).</p>
  </div>
</Panel>
<Panel header="How do I change the resolution of the game?" key="14">
  <div>
    <p>The only way to do this is to click configuration -{'>'} GPU tab and then change the resolution scale.</p>
  </div>
</Panel>
<Panel header="How can I host a match?" key="15">
  <div>
    <p>
      There are numerous ways to host. Below are 3 methods which may have varying success depending on your network setup. If none of these work you may have to contact your internet service provider if you want to be able to host matches.
      Additionally please note that if you have a private IP then players will be unable to join your matches unless you get a public IP. Most ISP's provide public IP's.
    </p>

      <Divider></Divider>
    
      <b>UPNP</b>
      <p>
      This is the simplest hosting option if succesful. Simply enable UPNP in the emulators "Metal Gear Online" tab as per this 
      <a href="https://media.discordapp.net/attachments/817184487061454928/1182987635078217738/image.png?ex=6586b217&is=65743d17&hm=08545b81bdd3bf5ddfed5f0c9ea49c789558837ae3581a534639d9fb71289e68&=&format=webp&quality=lossless"> image </a> 
      and you should be able to create a game. If not then you may have to check it is enabled in your router page. To get to your router page you need to input your default gateway ip into your web address.
      If unsure on how to obtain the default gateway then you can follow the first minute of this <a href="https://www.youtube.com/watch?v=8G4Clb8uQ2g">video</a>.
      </p>
      <br></br>

      <b>Manual Port Forward</b>
      <p>
      Search your internet service provider (e.g., Virgin Media, Xfinity, AT&T, etc.) and how to port forward.   
      For example, if your internet is provided by Virgin Media I would search Virgin Media how to port forward (Image example <a href="https://media.discordapp.net/attachments/817184487061454928/1182989680875143188/image.png?ex=6586b3fe&is=65743efe&hm=e09ae2907c881e71eb855fbf3a38152776357ac5acd33cf7aba81cecfb749d1c&=&format=webp&quality=lossless">here</a>). 
      All you need from our end is the port and the protocol. The default port is 5730 and the protocol is UDP for MGO2PC. 
      You can see how this user accomplished port forwarding on their network <a href="https://www.youtube.com/watch?v=8G4Clb8uQ2g">here</a>. 
      
      Additionally, please note that if you have a private IP then players will be unable to join your matches unless you get a public IP. Most ISPs provide public IPs.
      </p>

      <br></br>

      <b>Portmapper (for when you do not have access to router page)</b>

      <p>
        If you do not have access to your router then you can try <a href="https://www.youtube.com/watch?v=eENjFkI7Zts">this method</a>. 
         If the program fails to connect then you may want to try a different UPNP library as per this 
         <a href="https://media.discordapp.net/attachments/817184487061454928/1182997161290514522/image.png?ex=6586baf6&is=657445f6&hm=42fa7a18e8ccb2788957597bc1a3040b223c9da7a885518cf5e7d4e5de65d069&=&format=webp&quality=lossless">image</a> .
         This method also requires UPNP to be enabled on your router to work.
      </p>

  </div>
</Panel>
<Panel header="How do I disable shadows?" key="16">
  <div>
    <p>Disabling shadows gives a huge fps boost. Shadows can be disabled by holding l3,r3, and up for about 3 seconds. 
      Please see <a href="https://youtu.be/o1QT6okFVr8">this video</a> on how to do this in game if unsure.</p>
  </div>
</Panel>
      
      </Collapse>
    </PageContainer>
  );
};
