<script>
  import BackendSupport from "#lib/components/_shared/ui/BackendSupport.svelte";
  import FrameworkSupport from "#lib/components/_shared/ui/FrameworkSupport.svelte";
  import SidebarMenuRight from "#lib/components/sidebar/ui/SidebarMenuRight.svelte";
  import ParagraphText from "#lib/components/typography/ParagraphText.svelte";
  import ParagraphTextHighlight from "#lib/components/typography/ParagraphTextHighlight.svelte";
  import ParagraphTextHighlightInfo from "#lib/components/typography/ParagraphTextHighlightInfo.svelte";
  import SubtitleText from "#lib/components/typography/SubtitleText.svelte";
  import TitleTextButton from "#lib/components/typography/TitleTextButton.svelte";

  const menu = [
    { label: "Introdução", id: "introducao" },
    { label: "Conversão backend e frontend", id: "backend-para-frontend" },
    { label: "Código aberto", id: "codigo-aberto" },
  ];
</script>

<SidebarMenuRight {menu}>
  <div id="introducao" class="scroll-mt-6">
    <TitleTextButton
      text="Introdução"
      urlNext="/docs/get-started/installation"
    />
  </div>

  <div class="space-y-3 md:space-y-5">
    <ParagraphText>
      {#snippet text()}
        Este é um projecto de design system baseado em Tailwind CSS, pensado
        para ser <span class="font-bold"
          >análogo aos frameworks de frontend</span
        >. Para demonstrar os componentes, vamos focar-nos nas tecnologias
        <a
          href="https://svelte.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold underline">svelte</a
        >,
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold underline">react</a
        >,
        <a
          href="https://vuejs.org"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold underline">vue</a
        >,
        <a
          href="https://flutter.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold underline">flutter</a
        >
        e
        <a
          href="https://tauri.app"
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold underline">tauri</a
        >.
      {/snippet}
    </ParagraphText>

    <FrameworkSupport />

    <ParagraphText>
      {#snippet text()}
        Este projecto é para pessoas ou equipas que querem
        <span class="font-bold"
          >manter a consistência do design e da experiência do utilizador</span
        >
        em aplicações de diferentes plataformas (Web, Mobile e Desktop), mesmo usando
        tecnologias diferentes no desenvolvimento. Teremos ferramentas para converter
        um projecto, por exemplo,
        <span class="italic font-semibold"
          >de svelte para flutter, ou vice-versa, desde que utilize o nosso
          ecossistema e as nossas ferramentas, como a aplicação desktop ou os
          plugins.</span
        >
      {/snippet}
    </ParagraphText>

    <ParagraphTextHighlight
      text="Este projeto foi desenvolvido exclusivamente com HTML5, CSS3 e JavaScript, sem a utilização de pacotes ou bibliotecas externas. A proposta foi aproveitar ao máximo os recursos nativos dessas tecnologias para construir todos os componentes da aplicação."
    />

    <ParagraphTextHighlightInfo
      text="Este projeto pode ser uma alternativa ao shadcn/ui. Em vez de fornecer uma biblioteca, seguimos uma filosofia de copiar e colar: você reaproveita apenas o código de que precisa. O nosso objetivo é disponibilizar componentes legíveis e fáceis de modificar, para que possas adaptá-los às tuas necessidades."
    />
  </div>

  <div
    id="backend-para-frontend"
    class="mt-5 space-y-3 md:space-y-5 scroll-mt-6"
  >
    <SubtitleText text="Conversão backend e frontend" />

    <ParagraphText>
      {#snippet text()}
        Este projecto também foi desenvolvido para
        <span class="font-bold"
          >ler a documentação da tua API e, a partir dela, gerar uma aplicação
          frontend</span
        >
        com o nosso ecossistema. Aceitamos
        <span class="font-bold"
          >qualquer documentação OpenAPI, como as do Swagger e do Scalar</span
        >. Lemos os query params, os DTOs e as respostas da tua aplicação e
        geramos um painel administrativo que podes personalizar.
      {/snippet}
    </ParagraphText>

    <ParagraphText>
      {#snippet text()}
        É ideal para quem trabalha com backend e quer um frontend organizado,
        <span class="font-bold"
          >sem ter de criar componentes e páginas à mão</span
        >. As tecnologias de backend abaixo são as
        <span class="font-bold">suportadas por padrão</span>.
      {/snippet}
    </ParagraphText>

    <BackendSupport />

    <ParagraphText>
      {#snippet text()}
        E o processo vice-versa também possível
        <span class="font-bold"
          >se o frontend for construído com uma das tecnologias da Negocil</span
        >pelo menos nesta fase incial para mais control e segurança.
      {/snippet}
    </ParagraphText>
  </div>

  <div id="codigo-aberto" class="mt-5 space-y-2 md:space-y-5 scroll-mt-6">
    <SubtitleText text="Código aberto" />

    <ParagraphText>
      {#snippet text()}
        O projecto é <span class="font-bold">totalmente open-source</span> e está
        disponível no GitHub para a comunidade estudar, fazer fork e contribuir para
        o seu crescimento. No entanto, a nossa equipa será rigorosa na aceitação
        de contribuições, por isso conhece primeiro a nossa filosofia:
      {/snippet}
    </ParagraphText>

    <ul class="list-disc space-y-2 pl-5">
      <li>
        <span class="font-bold"
          >Não aceitamos Pull Requests escritos por IA.</span
        >
      </li>
      <li>
        <span class="font-bold">Não aceitamos código desorganizado</span>
        que não siga a organização deste projecto.
      </li>
      <li>
        <span class="font-bold"
          >Não aceitamos scripts ou comandos sem comprovação da origem</span
        >
        e do que fazem.
      </li>
    </ul>

    <ParagraphTextHighlightInfo
      text="Recomendamos que façam fork e podem trabalhar no fork para depois caso o projecto para os seus projectos, porque o projecto principal o processo de colaboração é rigoroso"
    />
  </div>
</SidebarMenuRight>
