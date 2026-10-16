<script lang="ts">
  import TerminalApp from "#lib/components/_shared/ui/mockup/terminal/TerminalApp.svelte";
  import TerminalCLI from "#lib/components/_shared/ui/mockup/terminal/TerminalCLI.svelte";
  import TerminalCopy from "#lib/components/_shared/ui/mockup/terminal/TerminalCopy.svelte";
  import SidebarMenuRight from "#lib/components/sidebar/ui/SidebarMenuRight.svelte";
  import ParagraphText from "#lib/components/typography/ParagraphText.svelte";
  import SubtitleText from "#lib/components/typography/SubtitleText.svelte";
  import TitleTextButton from "#lib/components/typography/TitleTextButton.svelte";

  const menu = [
    { label: "Instalação", id: "installation" },
    { label: "Copiar e colar", id: "copy-and-paste" },
    { label: "Terminal", id: "terminal-cli" },
    { label: "Aplicação Desktop", id: "application-desktop" },
  ];

  const methods = [
    {
      value: "Copiar e colar",
      description: "Copia o código e cola-o diretamente no teu projeto",
      icon: "hgi hgi-stroke hgi-rounded hgi-copy-01",
    },
    {
      value: "Terminal",
      description: "Instala com um único comando na linha de comandos",
      icon: "hgi hgi-stroke hgi-rounded hgi-computer-terminal-01",
    },
    {
      value: "Aplicação",
      description: "Descarrega a aplicação de desktop e tem tudo num só lugar",
      icon: "hgi hgi-stroke hgi-rounded hgi-computer",
    },
  ];
</script>

<SidebarMenuRight {menu}>
  <div id="installation" class="scroll-mt-6">
    <TitleTextButton
      text="Instalação"
      urlBack="/docs/get-started/introduction"
      urlNext="/docs/get-started/installation"
    />

    <ParagraphText text="Podes instalar no seu projecto da seguinte opções:" />

    <div class="grid grid-cols-2 gap-5 md:gap-8 my-4">
      {#each methods as it (it.value)}
        <button
          class="flex flex-col items-center text-center p-2 rounded-sm bg-gray-100 dark:bg-background"
        >
          <i class="{it.icon} text-5xl md:text-7xl"></i>
          <div>{it.value}</div>
          <div class="text-[12px] md:max-w-50 mt-2">{it.description}</div>
        </button>
      {/each}
    </div>
  </div>

  <div id="copy-and-paste" class="mt-5 md:mt-8 scroll-mt-6 space-y-3">
    <SubtitleText text="Copiar e colar" />

    <ParagraphText
      text="Para esta opção basta clicar no botão copiar que ele irá te apresenta um modal para visualizar a estrutura de depedência do componente."
    />

    <TerminalCopy />
  </div>

  <div id="terminal-cli" class="mt-5 scroll-mt-6">
    <SubtitleText text="Terminal" />

    <TerminalCLI />
  </div>

  <div id="application-desktop" class="mt-5 scroll-mt-6">
    <SubtitleText text="Aplicação" />

    <TerminalApp />
  </div>
</SidebarMenuRight>
