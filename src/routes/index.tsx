import { createFileRoute } from "@tanstack/react-router";
import { clsx } from "clsx";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";

import Avator from "../assets/avatar.jpg";
import Nexus from "../assets/nexus.jpg";
import Holoyotei from "../assets/holoyotei.png";
import TwitchNoticeForDiscord from "../assets/twitch-notice-for-discord.png";
import { ServiceCard } from "@/components/ServiceCard";
import { Github } from "@/components/icons/Github";
import { LinkIcon } from "@/components/icons/Link";
import { useTheme } from "@/hooks/useTheme";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { theme } = useTheme();

  const thisYear = new Date().getFullYear();

  return (
    <div
      className={clsx(
        "bg-linear-to-r",
        "from-sky-100 via-zinc-50 to-sky-100 text-zinc-900",
        "dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 dark:text-white"
      )}
    >
      <Header />
      <div className="mx-auto container">
        <div className=" md:px-16 sm:px-8 px-4 py-64 flex flex-col justify-center items-center">
          <div
            className={clsx(
              " w-fit bg-clip-text text-transparent bg-linear-to-r from-sky-600 to-blue-600 font-bold text-7xl"
            )}
          >
            n-soukun
          </div>
          <div className=" mt-8 w-fit text-xl tracking-wider text-center">
            新しい技術に触れ、手を動かすことが好きなエンジニアです。
          </div>
        </div>
      </div>
      <div className="mx-auto container px-4 py-16">
        <SectionTitle title="About me" subtitle="自己紹介" />
        <div className=" flex md:flex-row flex-col gap-8 items-center p-8 shadow bg-zinc-50 dark:bg-zinc-700 rounded-2xl">
          <img src={Avator} width={256} height={256} className=" rounded-xl" />
          <div>
            <div className=" text-2xl font-bold">Soukun</div>
            <p className=" mt-4 text-lg leading-relaxed">
              はじめまして、Soukunと申します。フロントエンドからサーバーサイドまで幅広く学んでおります。
              <br />
              私は趣味がプログラミングで、ほぼ毎日コードを書いております。他には、EスポーツやVTuberも大好きです。
              <br />
              <br />
              技術的な好奇心が強く、新しいフレームワークやライブラリをよく試します。そのため、広く浅く様々な知識を持ち合わせていることが強みです。
              また、TypeScriptを長く使っているため、型安全なコードを書くことが得意です。
              <br />
            </p>
          </div>
        </div>
        <SectionTitle className=" mt-16" title="Works" subtitle="制作物" />
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-4">
          <ServiceCard
            title="ホロよてい"
            description="VTuberグループ『ホロライブ』の非公式番組表サービスです。"
            image={Holoyotei}
            url="https://www.holoyotei.net/"
            linkIcon={<LinkIcon size={20} />}
            linkText="ホームページ"
            tags={[
              "TypeScript",
              "React",
              "React Router v7",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "Prisma",
              "BullMQ",
            ]}
          />
          <ServiceCard
            title="neXus"
            description="League of Legendsのカスタム大会用のHUDを提供するWindowsアプリです。"
            image={Nexus}
            url="https://github.com/n-soukun/nexus"
            linkIcon={
              <Github size={20} color={theme === "light" ? "white" : "black"} />
            }
            linkText="Github リポジトリ"
            tags={["TypeScript", "Electron", "React", "Tanstack Router", "MUI"]}
          />
          <ServiceCard
            title="Twitch Notice for Discord"
            description="配信者がオンラインになったら Discord へ通知を送るための EventSub リスナーです。"
            image={TwitchNoticeForDiscord}
            url="https://github.com/n-soukun/twitch-notice-for-discord"
            linkIcon={
              <Github size={20} color={theme === "light" ? "white" : "black"} />
            }
            linkText="Github リポジトリ"
            tags={["TypeScript", "Cloudflare Workers", "hono"]}
          />
        </div>
        <SectionTitle
          className=" mt-16"
          title="Contact"
          subtitle="お問い合わせ"
        />
        <div className=" flex md:p-16 p-8 shadow bg-zinc-50 dark:bg-zinc-700 rounded-2xl">
          <div className=" m-auto text-center">
            <p>ご連絡はX（旧Twitter）のDMまでお願いいたします。</p>
            <a
              href="https://x.com/z70933"
              target="_blank"
              rel="noreferrer"
              className=" mt-4 inline-block px-4 py-2 rounded-lg font-bold bg-zinc-950 text-white hover:bg-zinc-900 transition-colors"
            >
              @z70933
            </a>
          </div>
        </div>
      </div>
      <footer className=" bg-zinc-200 dark:bg-zinc-950 px-8 py-4 text-center text-zinc-600 dark:text-zinc-400">
        <small>&copy; {thisYear} n-soukun</small>
      </footer>
    </div>
  );
}
