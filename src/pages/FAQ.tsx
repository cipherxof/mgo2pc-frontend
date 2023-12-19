import { PageContainer } from '@ant-design/pro-layout';
import { Collapse, Divider } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
const { Panel } = Collapse;

export default (): React.ReactNode => {
  const intl = useIntl();

  document.title = 'FAQ - Metal Gear Online 2 Fan Revival';
  return (
    <PageContainer>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Registration Process" key="1">
          <div>
            <p>To register, please visit <a href="https://mgo2pc.com/register">our registration page</a>. We advise using a Gmail account for registration as Hotmail/Outlook emails have been experiencing issues lately. Your username should be at least 8 characters long, containing only letters and numbers, without spaces or special characters. This username will also serve as your Game ID, and the chosen password will be your game password. Once your account is created, it is not necessary to change your password, even if redirected to a password change page.</p>
          </div>
        </Panel>
        <Panel header="Email Confirmation Issues" key="2">
          <div>
          <p>If you do not receive an email confirmation, it is possible that a Hotmail/Outlook email address was used, which might cause delays. However, account activation is not required. Please ensure you remember your username and password. If forgotten, assistance can be sought by opening a ticket in our <a href="https://discord.com/invite/MNqmzuW2wH">Discord channel</a>.</p>
          </div>
        </Panel>

        <Panel header="Password Reset Instructions" key="3">
          <div>
            <p>If you have forgotten your password, submit your email address <a href="https://mgo2pc.com/recovery">here</a>. You will receive an email with a link to reset your password. Simply follow the instructions provided in the email.</p>
          </div>
        </Panel>

        <Panel header="Changing the Game Language" key="4">
          <div>
            <p>To change the game language on PS3: Navigate to Settings{'>'}System Settings{'>'} System Language{'>'}English (United States). On PC: Click the config button{'>'}System{'>'}Console Language{'>'}English (US){'>'}Apply{'>'}Save. Please note that if your language is unsupported, the game will default to Japanese.</p>
          </div>
        </Panel>

        <Panel header="Purchasing and Applying Cosmetics" key="5">
          <div>
            <p>To purchase cosmetics, log into <a href="https://mgo2pc.com/login">mgo2pc.com</a>, then visit the <a href="https://mgo2pc.com/shop">reward shop</a>. You can buy gear using rewards earned in-game, without any real money. To apply a cosmetic, ensure you are logged out of the character, then select the item in the shop and click 'Equip'. Choose the character in the popup window, and upon returning to the game, the item will be applied to your character.</p>
          </div>
        </Panel>

        <Panel header="Moderation Support and Opening Tickets" key="7">
          <div>
            <p>For moderation support, please contact our staff through the dedicated channel in our <a href="https://discord.com/invite/MNqmzuW2wH">Discord</a>.</p>
          </div>
        </Panel>

        <Panel header="System Requirements for PC Users" key="8">
          <div>
            <p>For optimal performance, PCs older than 5 years (as of 2023) may not be suitable due to the intensive nature of PS3 emulation. Recommended minimum CPU specs include Intel i5-10400 (or exceptions like 8700k, 9900k) and AMD Ryzen 5 3600 (or older CPUs starting from 2700X). GPUs should support Vulkan, except for Maxwell/900 series due to Vulkan driver issues.</p>
          </div>
        </Panel>

        <Panel header="Compatibility with Linux, Mac, Steam Deck, ASUS ROG Ally" key="9">
          <div>
            <p>Currently, there is no custom MGO build for Linux, and it is not officially supported. Mac performance is insufficient for a playable experience. The Steam Deck lacks the necessary power for this game. The ASUS ROG Ally can run the game adequately, following the standard Windows PC tutorial with a potential adjustment in the 'Advanced Spurs Threads' setting to 3.</p>
          </div>
        </Panel>

        <Panel header="Mouse and Keyboard Gameplay" key="10">
          <div>
            <p>Mouse and keyboard can be used, but are not recommended due to the lack of native support for these input devices. A controller is the preferred method for playing.</p>
          </div>
        </Panel>

        <Panel header="Donation Information" key="11">
          <div>
            <p>
            {intl.formatMessage({ id: 'app.faq.donatetab' })}
            </p>
          </div>
        </Panel>

        <Panel header="Resolving Sound Issues" key="12">
          <div>
            <p>If you experience no sound, it may indicate inadequate CPU performance or other technical issues. To resolve this, adjust the emulator settings: CPU (Preferred SPU Threads), Audio (Buffering, Time Stretching, Output Mode), and Advanced (Maximum SPURS Threads).</p>
          </div>
        </Panel>

        <Panel header="Enabling Fullscreen Mode" key="13">
          <div>
            <p>To enable fullscreen mode, double-click the center of the screen or press 'Alt + Enter'. A visual guide is available in this <a href="https://youtu.be/eCBp_D7koWs">video tutorial</a>.</p>
          </div>
        </Panel>

        <Panel header="Adjusting Game Resolution" key="14">
          <div>
            <p>To change the game resolution, go to Configuration{'>'}GPU tab and modify the resolution scale as desired.</p>
          </div>
        </Panel>

        <Panel header="Hosting a Match: Guidelines and Tips" key="15">
          <div>
            <p>There are several methods to host a match, depending on your network setup. If you encounter difficulties, you may need to contact your ISP. Note that a public IP is required for other players to join your matches.</p>
            <Divider></Divider>
            <p><strong>UPNP:</strong> Enable UPNP in the emulator's settings and check if it's enabled in your router. For detailed instructions, refer to this <a href="https://media.discordapp.net/attachments/817184487061454928/1182987635078217738/image.png?ex=6586b217&is=65743d17&hm=08545b81bdd3bf5ddfed5f0c9ea49c789558837ae3581a534639d9fb71289e68&=&format=webp&quality=lossless">guide</a>.</p>
            <p><strong>Manual Port Forward:</strong> Consult your ISP's guidelines for port forwarding. Use port 5730 with UDP protocol for MGO2PC. An example can be found <a href="https://www.youtube.com/watch?v=8G4Clb8uQ2g">here</a>.</p>
            <p><strong>Portmapper:</strong> If router access is restricted, try Portmapper following <a href="https://www.youtube.com/watch?v=eENjFkI7Zts">this method</a>, adjusting the UPNP library as necessary.</p>
          </div>
        </Panel>

        <Panel header="Disabling Shadows for Improved Performance" key="16">
          <div>
            <p>To disable shadows, which significantly boosts FPS, hold L3, R3, and Up for about 3 seconds. For a demonstration, watch <a href="https://youtu.be/o1QT6okFVr8">this video</a>.</p>
          </div>
        </Panel>
      </Collapse>
    </PageContainer>
  );
};
