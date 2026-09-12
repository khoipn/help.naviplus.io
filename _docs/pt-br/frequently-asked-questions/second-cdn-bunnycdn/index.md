---
description: "Como o Navi+ entrega seu menu por duas redes de distribuição de conteúdo independentes para que ele fique sempre online, e o que faz a opção \"Use a Secondary CDN (BunnyCDN)\" do app embed — inclusive quando visitantes de algumas regiões não conseguem alcançar a Cloudflare."
lang: pt-br
layout: default
permalink: /pt-br/docs/frequently-asked-questions/second-cdn-bunnycdn/
title: "Como o Navi+ mantém seu menu online — a opção \"Use a Secondary CDN (BunnyCDN)\""
---
# Como o Navi+ mantém seu menu online — a opção "Use a Secondary CDN (BunnyCDN)"

Seu menu não fica armazenado dentro do tema. A cada carregamento de página, o navegador busca alguns arquivos pequenos do Navi+: o motor do menu, seus estilos e os dados do seu menu. De onde esses arquivos vêm decide se o menu aparece, e com que rapidez. Esta página explica como essa entrega funciona, como ela é protegida contra quedas e o que a caixa **Use a Secondary CDN (BunnyCDN)** do app embed da Shopify muda.

---

## Duas redes, um menu

O Navi+ entrega os arquivos do menu por uma rede de distribuição de conteúdo (CDN): um conjunto de servidores espalhados pelo mundo que guardam cópias dos mesmos arquivos, para que cada visitante seja atendido a partir de um local próximo.

Para garantir que um problema em uma rede nunca derrube o seu menu, os mesmos arquivos são mantidos em **duas redes independentes**, operadas por dois provedores diferentes:

| Rede | Provedor | Função |
|---|---|---|
| Rede principal | Cloudflare | Atende todas as lojas por padrão. |
| Segunda rede | BunnyCDN | Guarda uma cópia idêntica, atualizada a cada versão do Navi+. Assume quando a rede principal não consegue entregar. |

Cada provedor opera sua própria infraestrutura global, com seus próprios compromissos de disponibilidade. Como as duas não compartilham servidores, um incidente de um lado deixa o outro intacto: o menu nunca depende de uma única empresa continuar no ar.

---

## Como funciona um carregamento de página por padrão

<div align="center">

<svg viewBox="0 0 720 330" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="20" y="120" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Navegador do visitante</text>
  <text x="95" y="172" text-anchor="middle" font-size="12" fill="#4b5563">abre sua loja</text>
  <text x="95" y="190" text-anchor="middle" font-size="12" fill="#4b5563">script de inicialização do Navi+ roda</text>

  <rect x="290" y="40" width="200" height="100" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="390" y="66" text-anchor="middle" font-size="14" font-weight="600" fill="#9a3412">Rede principal</text>
  <text x="390" y="86" text-anchor="middle" font-size="12" fill="#7c2d12">Cloudflare</text>
  <text x="390" y="110" text-anchor="middle" font-size="11" fill="#7c2d12">motor do menu · estilos · dados do menu</text>
  <text x="390" y="126" text-anchor="middle" font-size="11" fill="#7c2d12">entregues do local mais próximo</text>

  <rect x="290" y="200" width="200" height="100" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="390" y="226" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Segunda rede</text>
  <text x="390" y="246" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN</text>
  <text x="390" y="270" text-anchor="middle" font-size="11" fill="#1e40af">cópia idêntica de cada arquivo</text>
  <text x="390" y="286" text-anchor="middle" font-size="11" fill="#1e40af">atualizada a cada versão do Navi+</text>

  <rect x="560" y="120" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="152" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">O menu aparece</text>
  <text x="630" y="174" text-anchor="middle" font-size="12" fill="#047857">na página</text>

  <path d="M170,150 C230,150 230,90 290,90" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="222" y="108" text-anchor="middle" font-size="11" fill="#374151">1. pedir arquivos</text>

  <path d="M490,90 C530,90 530,150 560,150" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="522" y="108" text-anchor="middle" font-size="11" fill="#374151">2. entregar</text>

  <path d="M170,180 C230,180 230,250 290,250" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>
  <text x="222" y="230" text-anchor="middle" font-size="11" fill="#dc2626">se um arquivo falhar →</text>
  <text x="222" y="244" text-anchor="middle" font-size="11" fill="#dc2626">nova tentativa automática</text>

  <path d="M490,250 C530,250 530,180 560,180" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>

  <path d="M390,140 L390,200" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="404" y="174" font-size="10" fill="#6b7280">sincronizadas</text>
</svg>

</div>

1. O app embed do Navi+ no seu tema executa um script de inicialização minúsculo.
2. O script de inicialização pede à **rede principal** o motor do menu, seus estilos e os dados do seu menu.
3. O menu aparece.

Se algum desses arquivos não chegar da rede principal — uma queda, um tempo esgotado, um problema regional — o script de inicialização **tenta automaticamente o mesmo arquivo de novo pela BunnyCDN**. Isso acontece sozinho, no navegador do visitante, sem que você precise configurar nada. Na prática, um dia ruim de uma única rede é invisível para seus clientes.

---

## O único caso que a nova tentativa automática não cobre

A nova tentativa automática mora dentro do script de inicialização. Isso cria um ponto cego: se o **próprio script de inicialização** nunca chegar, nada roda, e não sobra nada para tentar de novo.

Isso acontece quando a conexão de um visitante não consegue alcançar a rede principal de jeito nenhum. A Cloudflare é uma das maiores redes da internet, mas não é alcançável de todos os lugares:

- Alguns países restringem ou limitam o tráfego da Cloudflare em nível nacional.
- Algumas redes corporativas ou escolares a bloqueiam como parte da filtragem de web.
- Alguns provedores de internet roteiam mal para a Cloudflare em certas regiões, e as requisições expiram.

Para uma loja cujos clientes estão em sua maioria em um desses lugares, um menu que funciona perfeitamente para você pode não aparecer para eles — e a nova tentativa automática nunca tem a chance de ajudar.

---

## O que "Use a Secondary CDN (BunnyCDN)" faz

Ativar a opção inverte a prioridade, de modo que o menu deixa de depender totalmente da rede principal:

<div align="center">

<svg viewBox="0 0 720 300" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb"/>
    </marker>
  </defs>

  <rect x="20" y="105" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="135" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Navegador do visitante</text>
  <text x="95" y="157" text-anchor="middle" font-size="12" fill="#4b5563">abre sua loja</text>
  <text x="95" y="175" text-anchor="middle" font-size="12" fill="#4b5563">script de inicialização pedido duas vezes</text>

  <rect x="290" y="30" width="200" height="80" rx="10" fill="#fafafa" stroke="#d1d5db" stroke-width="1.5"/>
  <text x="390" y="56" text-anchor="middle" font-size="14" font-weight="600" fill="#6b7280">Rede principal</text>
  <text x="390" y="76" text-anchor="middle" font-size="12" fill="#6b7280">Cloudflare</text>
  <text x="390" y="96" text-anchor="middle" font-size="11" fill="#6b7280">apenas o script de inicialização</text>

  <rect x="290" y="150" width="200" height="120" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="390" y="176" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Segunda rede</text>
  <text x="390" y="196" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN — agora principal</text>
  <text x="390" y="220" text-anchor="middle" font-size="11" fill="#1e40af">script de inicialização</text>
  <text x="390" y="236" text-anchor="middle" font-size="11" fill="#1e40af">motor do menu · estilos · dados do menu</text>
  <text x="390" y="256" text-anchor="middle" font-size="11" fill="#1e40af">tudo depois do início</text>

  <rect x="560" y="105" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="137" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">O menu aparece</text>
  <text x="630" y="159" text-anchor="middle" font-size="12" fill="#047857">na página</text>

  <path d="M170,135 C230,135 230,70 290,70" fill="none" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#cdnArrow2)"/>
  <text x="222" y="90" text-anchor="middle" font-size="11" fill="#6b7280">início (a que</text>
  <text x="222" y="104" text-anchor="middle" font-size="11" fill="#6b7280">responder primeiro)</text>

  <path d="M170,165 C230,165 230,210 290,210" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>

  <path d="M490,210 C530,210 530,150 560,150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>
  <text x="522" y="192" text-anchor="middle" font-size="11" fill="#2563eb">entregar</text>
</svg>

</div>

- O **script de inicialização é pedido às duas redes**, então o menu inicia desde que qualquer uma delas seja alcançável de onde o visitante está.
- **Todo o resto** — o motor do menu, seus estilos e os dados do seu menu — é carregado da **BunnyCDN** em vez da Cloudflare.

A rede principal continua em jogo apenas como segunda chance para o script de inicialização; a BunnyCDN passa a ser a fonte principal do menu em si.

---

## Quando você deve ativar?

Deixe **desativada**, a menos que um destes casos se aplique:

- **O suporte do Navi+ pediu.** Quando você relata um menu que não aparece para alguns visitantes, verificamos onde eles estão e qual rede conseguem alcançar. Se o problema for a rede principal, pediremos que você ative esta opção.
- **Você sabe que seus clientes estão em uma região onde a Cloudflare é restrita ou instável.** Se sua loja atende principalmente uma região assim, a BunnyCDN é a escolha principal mais segura para você. Marque a opção e nos avise — teremos prazer em confirmar que a mudança está correta do nosso lado.

Um sinal típico: o menu aparece para você e para a maioria dos visitantes, mas clientes de um país específico ou de uma rede específica relatam que ele nunca aparece.

---

## Por que vem desativada por padrão

As duas redes são globais e rápidas. Para a grande maioria das lojas não há nada a ganhar trocando, e o caminho padrão é o que monitoramos mais de perto e onde publicamos correções primeiro. A opção é uma ferramenta para os casos incomuns acima, não um ajuste de desempenho.

---

## Afeta a velocidade da página?

Nenhuma mudança perceptível é esperada. A BunnyCDN entrega os mesmos arquivos a partir de seus próprios pontos ao redor do mundo. Pedir o script de inicialização a duas redes adiciona uma pequena requisição extra; o motor do menu e os dados do seu menu continuam sendo carregados uma única vez, de uma única fonte.

---

## Como ativar ou desativar

1. No admin da Shopify, abra **Loja virtual → Temas → Personalizar**.
2. Clique no ícone **Incorporações de apps** na barra lateral esquerda.
3. Encontre **Navi+** e expanda.
4. Marque ou desmarque **Use a Secondary CDN (BunnyCDN)**.
5. Clique em **Salvar**.

A mudança vale a partir do próximo carregamento de página. Não há nada para configurar dentro do app Navi+.

> Se o suporte pediu para ativar durante a investigação de um problema, mantenha ativada até que confirmem que o problema foi resolvido — depois você pode desativar de novo.
