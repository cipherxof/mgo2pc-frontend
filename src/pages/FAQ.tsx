import { PageContainer } from '@ant-design/pro-layout';
import { Collapse, Divider } from 'antd';
import React from 'react';

const { Panel } = Collapse;

export default (): React.ReactNode => {
  document.title = "FAQ - Metal Gear Online";

  return (
    <PageContainer>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="What are the system requirements?" key="1">
          <div>
            Playstation 3 emulation is very CPU intensive and works best on desktops with 8 cores and 16 threads. That being said you can get playable framerates on weaker CPUs.
            The best value for performance you will likely get is with the Ryzen 3600 ($199) or the Intel i5 11400 ($189).
            However, if you are using a laptop we recommend one equipped with an 8-core/16-thread 35W+ H-series CPU such as an Intel Core i7-10870H or an AMD Ryzen 7 5800H.
            <Divider />
            <p><b>Minimum</b></p>
            <p><i>These CPUs are the minimum recommended to maintain close to 30 FPS in full lobbies with shadows off.</i> </p>
            <p><i>It is possible to play on weaker hardware than this but we cannot recommend them.</i> </p>
            <ul>
              <li>CPU: Intel i5 10400 or AMD Ryzen 3600</li>
              <li>GPU: Anything with Vulkan Support</li>
            </ul>

            <p><b>Recommended</b></p>
            <ul>
              <li>CPU: Intel i7-10700K or AMD Ryzen 3700x (or better)</li>
              <li>GPU: Anything with Vulkan Support</li>
            </ul>
          </div>
        </Panel>
        <Panel header="Why do I have no sound?" key="2">
          <div>
            Having no sound is a sign of poor CPU performance. There are a few emulator settings you can change to mitigate this issue.
            <Divider />
            <b>CPU</b>
            <ul>
              <li>Lower SPU Thread Priority (Enable)</li>
              <li>Prefered SPU Threads (Play with different values)</li>
            </ul>

            <b>Audio</b>
            <ul>
              <li>Increase Audio Buffering</li>
              <li>Enable Time Stretching</li>
              <li>Change Audio Out to OpenAL or XAudio (find what works best for you)</li>
            </ul>

            <b>Advacned</b>
            <ul>
              <li>Maximum Number of SPURS Threads (Play with different values)</li>
            </ul>
          </div>
        </Panel>

        <Panel header="How do I host?" key="3">
          <div>
            In order to host games you need to forward port 5730 UDP (or whatever port you selected in-game. 5730 is the default).<br />
            <br />The steps vary between ISPs and routers.<br />
            <br />You can also try your luck with software such as Portmapper (<a href="https://www.youtube.com/watch?v=eENjFkI7Zts&ab_channel=DormantHero">Video Guide</a>).
          </div>
        </Panel>

        <Panel header="Why can't I login?" key="5">
          <div>
            This is generally a result of having an outdated emulator. Make sure to update to the newest version. The latest builds have an auto updater so this should only be an issue if you are on a really old build.<br /><br />
            You can find a newer build <a href="https://mgo2pc.com/emu/rpcs3-9840.7z">here</a> or <a href="https://mgo2pc.com/rpcs3-mgo2.zip">here</a>. Upon launching it you will be notified if there's a newer build or not and it will automatically update.
          </div>
        </Panel>
      </Collapse>
    </PageContainer>
  );
};
