import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, data } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useEffect } from "react";
import ipaddr from "ipaddr.js";
import { RateLimiterMemory, RateLimiterRes } from "rate-limiter-flexible";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const stylesheet = "/assets/index-x0QYxXAG.css";
const LOCAL_HOSTNAMES = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "0.0.0.0", "[::1]"]);
const siteOrigin = (request) => {
  const { host, hostname } = new URL(request.url);
  return `${LOCAL_HOSTNAMES.has(hostname) ? "http" : "https"}://${host}`;
};
function GridLines() {
  return /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "pointer-events-none fixed inset-0 z-0 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "grid h-full w-full max-w-[88rem] grid-cols-2 border-x border-foreground/10 sm:grid-cols-4 lg:grid-cols-6", children: [
    /* @__PURE__ */ jsx("div", { className: "border-r border-foreground/10" }),
    /* @__PURE__ */ jsx("div", { className: "border-r border-foreground/10" }),
    /* @__PURE__ */ jsx("div", { className: "hidden border-r border-foreground/10 sm:block" }),
    /* @__PURE__ */ jsx("div", { className: "hidden border-r border-foreground/10 sm:block" }),
    /* @__PURE__ */ jsx("div", { className: "hidden border-r border-foreground/10 lg:block" }),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:block" })
  ] }) });
}
const LOGO_URL = "https://horizons-cdn.hostinger.com/2d21994a-bbc5-43c2-98c9-5eb71bcb5f37/vesta-industrial-fullres-nB3rD.png";
const navItems = [
  { index: "01", label: "Range", href: "#range" },
  { index: "02", label: "Grades", href: "#grades" },
  { index: "03", label: "Quality", href: "#quality" },
  { index: "04", label: "Contact", href: "#contact" }
];
function SiteHeader() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-30 border-b border-foreground/15 bg-background/90 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 w-full max-w-[88rem] items-stretch justify-between px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-3 self-center", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: LOGO_URL,
          alt: "Vesta Industrial",
          className: "h-10 w-auto object-contain sm:h-11",
          width: 176,
          height: 44
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Vesta Industrial Ltd" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "hidden items-stretch md:flex", "aria-label": "Primary", children: navItems.map((item) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: item.href,
        className: "flex items-center gap-2 border-l border-foreground/15 px-5 font-tech text-[11px] uppercase tracking-widest transition-colors hover:bg-primary hover:text-primary-foreground",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: item.index }),
          item.label
        ]
      },
      item.href
    )) }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "mailto:sales@vesta-industrial.com?subject=Quotation%20request",
        className: "flex items-center self-center bg-primary px-4 py-2.5 font-tech text-[11px] uppercase tracking-widest text-primary-foreground transition-transform active:scale-[0.98]",
        children: "Request a quote"
      }
    )
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "relative z-10 border-t border-foreground/15", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full max-w-[88rem] flex-col gap-3 px-5 py-8 font-tech text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8", children: [
    /* @__PURE__ */ jsx("span", { children: "© 2026 Vesta Industrial Ltd" }),
    /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Si · Mg · Mn · AlTi · AlSr · Fluxes" }),
    /* @__PURE__ */ jsx("span", { children: "Belgrade — Ploče — Rijeka — Trieste" })
  ] }) });
}
function HorizonsPreviewScripts() {
  useEffect(() => {
    {
      void import("./assets/_virtual_horizons-runtime-JsZ-ckNh.js");
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    null,
    null
  ] });
}
const links = () => [{
  rel: "stylesheet",
  href: stylesheet
}, {
  rel: "icon",
  href: "/favicon.ico",
  sizes: "32x32"
}, {
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
}];
function loader$4({
  request
}) {
  const origin = siteOrigin(request);
  return data({
    origin
  }, {
    headers: {
      Link: `<${origin}/sitemap.xml>; rel="sitemap"; type="application/xml"`
    }
  });
}
function headers({
  loaderHeaders
}) {
  return loaderHeaders;
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), /* @__PURE__ */ jsx(HorizonsPreviewScripts, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx("div", {
        id: "root",
        children
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(GridLines, {}), /* @__PURE__ */ jsx(SiteHeader, {}), /* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(SiteFooter, {})]
  });
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), null]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  headers,
  links,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const ROOT_ROUTE_ID = "root";
const siteOriginFrom = (matches) => {
  const root2 = matches.find((match) => match?.id === ROOT_ROUTE_ID);
  return root2?.loaderData?.origin ?? "";
};
const absoluteUrl = (origin, target) => {
  if (/^https?:\/\//.test(target)) {
    return target;
  }
  return `${origin}${target.startsWith("/") ? target : `/${target}`}`;
};
function seo({ matches, location }, input) {
  const origin = siteOriginFrom(matches);
  const canonical = absoluteUrl(origin, input.path ?? location.pathname);
  const imageUrl = input.image ? absoluteUrl(origin, input.image) : "";
  const tags = [
    { title: input.title },
    { name: "description", content: input.description },
    { property: "og:title", content: input.title },
    { property: "og:description", content: input.description },
    { property: "og:type", content: input.type ?? "website" },
    { name: "twitter:card", content: imageUrl ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: input.title },
    { name: "twitter:description", content: input.description }
  ];
  if (origin) {
    tags.push({ tagName: "link", rel: "canonical", href: canonical }, { property: "og:url", content: canonical });
  }
  if (imageUrl) {
    tags.push({ property: "og:image", content: imageUrl }, { name: "twitter:image", content: imageUrl });
  }
  if (input.noindex) {
    tags.push({ name: "robots", content: "noindex" });
  }
  for (const block of [input.jsonLd ?? []].flat()) {
    tags.push({ "script:ld+json": block });
  }
  return tags;
}
const media = {
  hero: "https://images.hostinger.com/4600933c-1be7-4316-acf6-5a07b5d3fa9e.png",
  silicon: "https://images.hostinger.com/542d2030-d2ff-4ffd-9318-1f8c43cf027d.png",
  alloys: "https://images.hostinger.com/0f2de96e-b73e-4141-a5ef-1df0b712ba2b.png",
  pour: "https://images.hostinger.com/0e414ce6-fccf-4b28-bfba-3d486c536b61.png"
};
const range = [
  {
    index: "01",
    name: "Metallurgical Silicon",
    tagline: "Si 553 · 441 · 3303 · 2202 · 1101",
    description: "Lumpy metallurgical-grade silicon for Al-Si casting alloys and wrought series. Consistent sizing 10–100 mm, low-fines, each lot assayed before dispatch.",
    grades: ["Si 553", "Si 441", "Si 3303", "Si 2202", "Si 1101"],
    packing: "1 MT big bags · 25 kg bags on pallets · bulk"
  },
  {
    index: "02",
    name: "Magnesium",
    tagline: "Mg 99.80 · Mg 99.90 · granules",
    description: "Primary magnesium ingots from 300 g to 7.5 kg and passivated granules for 5xxx-series alloying and desulphurisation. Tight oxide control, dry-warehouse stored.",
    grades: ["Mg 99.80 ingot", "Mg 99.90 ingot", "Mg granules 0.2–2 mm"],
    packing: "Wooden cases · shrink-wrapped pallets · steel drums"
  },
  {
    index: "03",
    name: "Manganese",
    tagline: "Mn flakes 99.7 · briquettes 75/25 · 80/20",
    description: "Electrolytic manganese flakes and Al-Mn briquettes for controlled manganese additions in 3xxx can-stock and architectural extrusion billets.",
    grades: ["Mn flakes 99.7", "Mn briquette 75/25", "Mn briquette 80/20"],
    packing: "1 MT big bags · 50 kg steel drums"
  },
  {
    index: "04",
    name: "Master Alloys",
    tagline: "AlTi10 · AlSr10 · AlTi5B1 · AlMn20 · AlCu50",
    description: "Grain refiners, modifiers and hardeners cast as waffle, rod and cut bar. Full dissolution curves supplied; strontium recovery guaranteed per addition rate.",
    grades: ["AlTi10", "AlSr10", "AlTi5B1 rod", "AlMn20", "AlCu50", "AlFe20", "AlB3"],
    packing: "Palletised waffle · coiled rod Ø 9.5 mm · cut bar in cases"
  },
  {
    index: "05",
    name: "Fluxes",
    tagline: "Covering · refining · drossing · Na/K-free",
    description: "Chloride-based covering, refining and drossing fluxes for crucible and reverberatory furnaces. Low-fume granulated grades, sodium- and potassium-free on request.",
    grades: ["Cover flux CV-2", "Refining flux RF-6", "Drossing flux DX-1", "Na/K-free series"],
    packing: "20 kg PE-lined bags · 500 kg big bags"
  }
];
const siliconSpecs = [
  { grade: "Si 553", si: "≥ 98.5", fe: "≤ 0.50", al: "≤ 0.50", ca: "≤ 0.30" },
  { grade: "Si 441", si: "≥ 99.0", fe: "≤ 0.40", al: "≤ 0.40", ca: "≤ 0.10" },
  { grade: "Si 3303", si: "≥ 99.3", fe: "≤ 0.30", al: "≤ 0.30", ca: "≤ 0.03" },
  { grade: "Si 2202", si: "≥ 99.5", fe: "≤ 0.20", al: "≤ 0.20", ca: "≤ 0.02" },
  { grade: "Si 1101", si: "≥ 99.7", fe: "≤ 0.10", al: "≤ 0.10", ca: "≤ 0.01" }
];
const masterAlloys = [
  { alloy: "AlTi10", addition: "Ti 9.0–11.0", form: "Waffle · rod · cut bar", use: "Grain refinement" },
  { alloy: "AlSr10", addition: "Sr 9.0–11.0", form: "Waffle · rod", use: "Modification of Al-Si eutectic" },
  { alloy: "AlTi5B1", addition: "Ti 4.5–5.5 · B 0.9–1.1", form: "Rod Ø 9.5 mm · coil", use: "Continuous grain refinement" },
  { alloy: "AlMn20", addition: "Mn 18–22", form: "Waffle · briquette", use: "Mn correction, 3xxx series" },
  { alloy: "AlCu50", addition: "Cu 48–52", form: "Waffle", use: "Cu addition, 2xxx series" },
  { alloy: "AlFe20", addition: "Fe 18–22", form: "Waffle", use: "Fe correction" },
  { alloy: "AlB3", addition: "B 2.5–3.5", form: "Rod · waffle", use: "Electrical-conductor grades" }
];
const qualitySteps = [
  {
    index: "Q1",
    title: "Sourcing & pre-assay",
    description: "Material is bought against producer certificates, then re-sampled at our own warehouse before any lot is accepted into stock."
  },
  {
    index: "Q2",
    title: "Spectrometric analysis",
    description: "Every outgoing lot is verified by OES and XRF to EN 573 and EN 1789. Certificates of analysis travel with the shipment, lot by lot."
  },
  {
    index: "Q3",
    title: "Packing & marking",
    description: "Big bags, drums and cases are marked with grade, lot number and net weight. Moisture-barrier liners are standard on fluxes and magnesium."
  },
  {
    index: "Q4",
    title: "Logistics & documentation",
    description: "Bonded stock across Belgrade, Ploče, Rijeka and Trieste. FOB, CIF or DAP under Incoterms 2020, with MSDS, CoA and customs documentation in one pack."
  }
];
const stats = [
  { value: "38", label: "Smelters supplied" },
  { value: "14", label: "Countries served" },
  { value: "99.2 %", label: "Lots on spec, 5-yr average" }
];
const contact = {
  email: "sales@vesta-industrial.com",
  phone: "+47 22 41 88 30",
  addresses: ["Belgrade", "Ploče", "Rijeka", "Trieste"]
};
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[88rem] px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-y border-foreground/15 py-3 font-tech text-[11px] uppercase tracking-widest text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { children: "Est. 2026 — Belgrade - Ljubljana" }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "ISO 9001 : 2015 certified" }),
        /* @__PURE__ */ jsx("span", { children: "12 400 MT / year" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "max-w-5xl pt-14 font-display text-[clamp(3rem,8.5vw,7.5rem)] font-medium leading-[0.95] tracking-tight sm:pt-20", children: [
        "Elements that make ",
        /* @__PURE__ */ jsx("em", { className: "italic text-primary", children: "aluminium" }),
        " perform."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-10 pb-16 pt-10 sm:pb-24 sm:pt-14 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-base leading-relaxed text-muted-foreground lg:col-span-5", children: "Vesta Industrial supplies metallurgical silicon, magnesium, manganese, master alloys and smelting fluxes to primary aluminium producers and casthouses — assayed, certified and delivered to the potroom door." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start gap-4 lg:col-span-7 lg:justify-end", children: [
          /* @__PURE__ */ jsx("a", { href: "mailto:sales@vesta-industrial.com?subject=Quotation%20request", className: "bg-primary px-8 py-4 font-tech text-xs uppercase tracking-widest text-primary-foreground transition-transform active:scale-[0.98]", children: "Request a quote" }),
          /* @__PURE__ */ jsx("a", { href: "#range", className: "border border-foreground/30 px-8 py-4 font-tech text-xs uppercase tracking-widest transition-colors hover:border-foreground", children: "View the range" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[88rem] px-5 sm:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "trace-track h-px bg-foreground/20", children: /* @__PURE__ */ jsx("div", { className: "trace-runner", children: /* @__PURE__ */ jsx("span", { className: "trace-dot" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-2 font-tech text-[10px] uppercase tracking-widest text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { children: "Potline B — tapping" }),
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "962 °C" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("figure", { className: "mx-auto w-full max-w-[88rem] px-5 sm:px-8", children: [
      /* @__PURE__ */ jsx("img", { src: media.hero, alt: "Worker in a heat suit tapping molten aluminium in a smelter potroom", className: "aspect-[21/9] w-full object-cover", width: 2048, height: 878, fetchPriority: "high" }),
      /* @__PURE__ */ jsxs("figcaption", { className: "flex items-center justify-between border-b border-foreground/15 py-2 font-tech text-[10px] uppercase tracking-widest text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { children: "Fig. 01 — Potroom, reduction cells" }),
        /* @__PURE__ */ jsx("span", { children: "Hall-Héroult process" })
      ] })
    ] })
  ] });
}
function Range() {
  return /* @__PURE__ */ jsx("section", { id: "range", className: "relative py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[88rem] px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between border-b border-foreground/15 pb-3", children: [
      /* @__PURE__ */ jsx("span", { className: "font-tech text-[11px] uppercase tracking-widest text-primary", children: "01 — The range" }),
      /* @__PURE__ */ jsx("span", { className: "hidden font-tech text-[11px] uppercase tracking-widest text-muted-foreground sm:inline", children: "Five product families" })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "max-w-3xl pt-8 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl", children: "A narrow catalogue, held to a wide tolerance of zero." }),
    /* @__PURE__ */ jsx("div", { className: "mt-14", children: range.map((category) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "group grid grid-cols-1 gap-4 border-t border-foreground/15 px-4 py-9 transition-colors last:border-b hover:bg-primary hover:text-primary-foreground sm:-mx-4 sm:grid-cols-12 sm:gap-6 sm:px-8",
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-tech text-xs tracking-widest text-primary group-hover:text-primary-foreground sm:col-span-1", children: category.index }),
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl font-medium leading-none tracking-tight", children: category.name }),
            /* @__PURE__ */ jsx("p", { className: "pt-3 font-tech text-[11px] uppercase tracking-widest text-muted-foreground group-hover:text-primary-foreground/70", children: category.tagline })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/85 sm:col-span-4", children: category.description }),
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-3", children: [
            /* @__PURE__ */ jsx("p", { className: "font-tech text-xs leading-loose", children: category.grades.join(" · ") }),
            /* @__PURE__ */ jsx("p", { className: "pt-3 font-tech text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary-foreground/70", children: category.packing })
          ] })
        ]
      },
      category.index
    )) })
  ] }) });
}
function MediaStrip() {
  return /* @__PURE__ */ jsxs("section", { "aria-label": "Foundry pour and company figures", className: "relative", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: media.pour,
        alt: "Molten aluminium poured from a crucible into a casting mould",
        className: "h-[52vh] w-full object-cover sm:h-[64vh]",
        width: 2048,
        height: 878,
        loading: "lazy"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid w-full max-w-[88rem] grid-cols-1 px-5 sm:grid-cols-3 sm:px-8", children: stats.map((stat, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `py-8 sm:py-10 ${i > 0 ? "border-t border-primary-foreground/25 sm:border-l sm:border-t-0 sm:pl-8" : ""}`,
        children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-5xl font-medium tracking-tight", children: stat.value }),
          /* @__PURE__ */ jsx("p", { className: "pt-2 font-tech text-[11px] uppercase tracking-widest text-primary-foreground/70", children: stat.label })
        ]
      },
      stat.label
    )) }) })
  ] });
}
function Grades() {
  return /* @__PURE__ */ jsx("section", { id: "grades", className: "relative py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[88rem] px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between border-b border-foreground/15 pb-3", children: [
      /* @__PURE__ */ jsx("span", { className: "font-tech text-[11px] uppercase tracking-widest text-primary", children: "02 — Grades & chemistry" }),
      /* @__PURE__ */ jsx("span", { className: "hidden font-tech text-[11px] uppercase tracking-widest text-muted-foreground sm:inline", children: "Values in wt %" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-16 pt-12 lg:grid-cols-2 lg:gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-medium tracking-tight sm:text-4xl", children: "Metallurgical silicon" }),
        /* @__PURE__ */ jsxs("table", { className: "mt-8 w-full border-collapse font-tech text-sm", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "text-left text-[10px] uppercase tracking-widest text-muted-foreground", children: [
            /* @__PURE__ */ jsx("th", { className: "pb-3 pr-4 font-medium", children: "Grade" }),
            /* @__PURE__ */ jsx("th", { className: "pb-3 pr-4 font-medium", children: "Si" }),
            /* @__PURE__ */ jsx("th", { className: "pb-3 pr-4 font-medium", children: "Fe" }),
            /* @__PURE__ */ jsx("th", { className: "pb-3 pr-4 font-medium", children: "Al" }),
            /* @__PURE__ */ jsx("th", { className: "pb-3 font-medium", children: "Ca" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: siliconSpecs.map((spec) => /* @__PURE__ */ jsxs("tr", { className: "border-t border-foreground/15", children: [
            /* @__PURE__ */ jsx("td", { className: "py-3.5 pr-4 text-primary", children: spec.grade }),
            /* @__PURE__ */ jsx("td", { className: "py-3.5 pr-4", children: spec.si }),
            /* @__PURE__ */ jsx("td", { className: "py-3.5 pr-4", children: spec.fe }),
            /* @__PURE__ */ jsx("td", { className: "py-3.5 pr-4", children: spec.al }),
            /* @__PURE__ */ jsx("td", { className: "py-3.5", children: spec.ca })
          ] }, spec.grade)) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "pt-4 font-tech text-[10px] uppercase tracking-widest text-muted-foreground", children: "Tighter impurity windows on request · sizing 10–100 mm" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-medium tracking-tight sm:text-4xl", children: "Master alloys" }),
        /* @__PURE__ */ jsxs("table", { className: "mt-8 w-full border-collapse font-tech text-sm", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "text-left text-[10px] uppercase tracking-widest text-muted-foreground", children: [
            /* @__PURE__ */ jsx("th", { className: "pb-3 pr-4 font-medium", children: "Alloy" }),
            /* @__PURE__ */ jsx("th", { className: "pb-3 pr-4 font-medium", children: "Addition" }),
            /* @__PURE__ */ jsx("th", { className: "hidden pb-3 pr-4 font-medium sm:table-cell", children: "Form" }),
            /* @__PURE__ */ jsx("th", { className: "pb-3 font-medium", children: "Typical use" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: masterAlloys.map((alloy) => /* @__PURE__ */ jsxs("tr", { className: "border-t border-foreground/15", children: [
            /* @__PURE__ */ jsx("td", { className: "py-3.5 pr-4 text-primary", children: alloy.alloy }),
            /* @__PURE__ */ jsx("td", { className: "py-3.5 pr-4", children: alloy.addition }),
            /* @__PURE__ */ jsx("td", { className: "hidden py-3.5 pr-4 sm:table-cell", children: alloy.form }),
            /* @__PURE__ */ jsx("td", { className: "py-3.5", children: alloy.use })
          ] }, alloy.alloy)) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "pt-4 font-tech text-[10px] uppercase tracking-widest text-muted-foreground", children: "Certificate of analysis with every lot · EN 573 / EN 1789" })
      ] })
    ] })
  ] }) });
}
function Quality() {
  return /* @__PURE__ */ jsx("section", { id: "quality", className: "relative py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[88rem] px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between border-b border-foreground/15 pb-3", children: [
      /* @__PURE__ */ jsx("span", { className: "font-tech text-[11px] uppercase tracking-widest text-primary", children: "03 — Quality & logistics" }),
      /* @__PURE__ */ jsx("span", { className: "hidden font-tech text-[11px] uppercase tracking-widest text-muted-foreground sm:inline", children: "Lot-by-lot traceability" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-12 pt-12 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("figure", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: media.silicon,
            alt: "Metallurgical silicon chunks in a steel container at the Rotterdam warehouse",
            className: "aspect-[3/2] w-full object-cover",
            width: 1536,
            height: 1024,
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxs("figcaption", { className: "flex items-center justify-between border-b border-foreground/15 py-2 font-tech text-[10px] uppercase tracking-widest text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { children: "Fig. 02 — Si 553, pre-dispatch assay" }),
          /* @__PURE__ */ jsx("span", { children: "Rotterdam" })
        ] }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: media.alloys,
            alt: "Stacked aluminium master alloy waffle ingots on pallets",
            className: "mt-10 aspect-[3/2] w-full object-cover",
            width: 1536,
            height: 1024,
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxs("figcaption", { className: "flex items-center justify-between border-b border-foreground/15 py-2 font-tech text-[10px] uppercase tracking-widest text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { children: "Fig. 03 — AlTi10 waffle, palletised" }),
          /* @__PURE__ */ jsx("span", { children: "Oslo" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsx("h2", { className: "max-w-xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl", children: "Every lot assayed. Every certificate traceable." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10", children: qualitySteps.map((step) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "grid grid-cols-[3rem_1fr] gap-6 border-t border-foreground/15 py-7 last:border-b sm:grid-cols-[4rem_12rem_1fr]",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-tech text-xs tracking-widest text-primary", children: step.index }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-medium tracking-tight", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "col-span-2 text-sm leading-relaxed text-muted-foreground sm:col-span-1", children: step.description })
            ]
          },
          step.index
        )) })
      ] })
    ] })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "relative bg-foreground text-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between border-b border-background/20 pb-3", children: [
      /* @__PURE__ */ jsx("span", { className: "font-tech text-[11px] uppercase tracking-widest text-primary-foreground/80", children: "04 — Contact" }),
      /* @__PURE__ */ jsx("span", { className: "hidden font-tech text-[11px] uppercase tracking-widest text-background/50 sm:inline", children: "Incoterms 2020 · FOB / CIF / DAP" })
    ] }),
    /* @__PURE__ */ jsxs("h2", { className: "max-w-4xl pt-12 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-tight", children: [
      "Furnaces don't wait. ",
      /* @__PURE__ */ jsx("em", { className: "italic text-primary-foreground/80", children: "Neither do we." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 grid gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-x-8 border-t border-background/20 py-6 sm:grid-cols-[8rem_1fr]", children: [
          /* @__PURE__ */ jsx("span", { className: "font-tech text-[10px] uppercase tracking-widest text-background/50", children: "Sales desk" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `mailto:${contact.email}`,
              className: "font-tech text-lg text-background underline decoration-primary decoration-2 underline-offset-8 hover:decoration-background",
              children: contact.email
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-x-8 border-t border-background/20 py-6 sm:grid-cols-[8rem_1fr]", children: [
          /* @__PURE__ */ jsx("span", { className: "font-tech text-[10px] uppercase tracking-widest text-background/50", children: "Duty phone" }),
          /* @__PURE__ */ jsx("a", { href: `tel:${contact.phone.replaceAll(" ", "")}`, className: "font-tech text-lg", children: contact.phone })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-x-8 border-y border-background/20 py-6 sm:grid-cols-[8rem_1fr]", children: [
          /* @__PURE__ */ jsx("span", { className: "font-tech text-[10px] uppercase tracking-widest text-background/50", children: "Warehouses" }),
          /* @__PURE__ */ jsx("span", { className: "font-tech text-lg", children: contact.addresses.join(" · ") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-6 lg:col-span-5 lg:items-end", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `mailto:${contact.email}?subject=Quotation%20request`,
            className: "bg-primary px-10 py-5 font-tech text-xs uppercase tracking-widest text-primary-foreground transition-transform active:scale-[0.98]",
            children: "Request a quote"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "max-w-xs text-sm leading-relaxed text-background/60 lg:text-right", children: "Send a grade, a tonnage and a delivery port — a trader replies within one working day with assay data and a firm offer." })
      ] })
    ] })
  ] }) });
}
function meta({
  matches,
  location
}) {
  return seo({
    matches,
    location
  }, {
    title: "Vesta Industrial — Alloying materials for aluminium smelters",
    description: "Metallurgical silicon, magnesium, manganese, master alloys (AlTi10, AlSr10, AlTi5B1) and smelting fluxes — assayed, certified and delivered to potrooms worldwide.",
    image: media.hero,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vesta Industrial Ltd",
      description: "Supplier of metallurgical silicon, magnesium, manganese, aluminium master alloys and smelting fluxes to primary aluminium producers.",
      email: "sales@vesta-industrial.com",
      telephone: "+47 22 41 88 30",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belgrade",
        addressCountry: "RS"
      }
    }
  });
}
const home = UNSAFE_withComponentProps(function HomePage() {
  return /* @__PURE__ */ jsxs("main", {
    className: "relative z-10",
    children: [/* @__PURE__ */ jsx(Hero, {}), /* @__PURE__ */ jsx(Range, {}), /* @__PURE__ */ jsx(MediaStrip, {}), /* @__PURE__ */ jsx(Grades, {}), /* @__PURE__ */ jsx(Quality, {}), /* @__PURE__ */ jsx(Contact, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const STATIC_PATHS = ["/"];
function escapeXml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}
function toLoc(origin, path) {
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}
function serializeSitemap(origin, entries) {
  const urls = entries.map((entry2) => {
    const loc = escapeXml(toLoc(origin, entry2.path));
    const lastmod = entry2.lastmod ? `
		<lastmod>${escapeXml(entry2.lastmod)}</lastmod>` : "";
    return `	<url>
		<loc>${loc}</loc>${lastmod}
	</url>`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
async function getDynamicEntries() {
  return [];
}
async function loader$3({
  request
}) {
  const origin = siteOrigin(request);
  const entries = [...STATIC_PATHS.map((path) => ({
    path
  })), ...await getDynamicEntries()];
  return new Response(serializeSitemap(origin, entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
const UNPUBLISHED_HOST_SUFFIXES = [".app-preview.com", ".app-preview.io", ".hostingersite.com", ".hostingersite.dev"];
const AI_ANSWER_AGENTS = ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "DuckAssistBot", "MistralAI-User", "meta-webindexer", "meta-externalfetcher", "Amzn-SearchBot", "Amzn-User"];
const AI_TRAINING_AGENTS = ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended", "meta-externalagent", "Amazonbot", "Bytespider"];
const CONTENT_SIGNAL = "Content-Signal: search=yes, ai-input=yes, ai-train=no";
function publishedRules(origin) {
  return ["User-agent: *", CONTENT_SIGNAL, "Allow: /", "", ...AI_ANSWER_AGENTS.flatMap((agent) => [`User-agent: ${agent}`, CONTENT_SIGNAL, "Allow: /", ""]), ...AI_TRAINING_AGENTS.flatMap((agent) => [`User-agent: ${agent}`, "Disallow: /", ""]), `Sitemap: ${origin}/sitemap.xml`];
}
function loader$2({
  request
}) {
  const origin = siteOrigin(request);
  const {
    hostname
  } = new URL(origin);
  const isUnpublished = UNPUBLISHED_HOST_SUFFIXES.some((suffix) => hostname.endsWith(suffix));
  const lines = isUnpublished ? ["User-agent: *", "Disallow: /"] : publishedRules(origin);
  return new Response(`${lines.join("\n")}
`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
const logger = {
  // Application errors - goes to stdout
  error: (...args) => {
    console.log("[ERROR]", ...args);
  },
  // Critical system errors - goes to stderr
  fatal: (...args) => {
    console.error("[FATAL]", ...args);
  },
  info: (...args) => {
    console.log("[INFO]", ...args);
  },
  debug: (...args) => {
    console.log("[DEBUG]", ...args);
  },
  warn: (...args) => {
    console.log("[WARN]", ...args);
  }
};
const MS_PER_SECOND = 1e3;
const WINDOW_SECONDS = 5 * 60;
const MAX_REQUESTS_PER_WINDOW = 100;
const IPV6_PREFIX_BYTES = 7;
const clientIdentifier = (request) => {
  const [forwarded] = request.headers.get("x-forwarded-for")?.split(",") ?? [];
  const address = forwarded?.trim() || request.headers.get("x-real-ip")?.trim();
  if (!address) {
    return "unknown";
  }
  try {
    const parsed = ipaddr.parse(address);
    if (!(parsed instanceof ipaddr.IPv6)) {
      return address;
    }
    if (parsed.isIPv4MappedAddress()) {
      return parsed.toIPv4Address().toString();
    }
    return parsed.toByteArray().slice(0, IPV6_PREFIX_BYTES).join(".");
  } catch {
    return address;
  }
};
const sharedLimiter = new RateLimiterMemory({
  points: MAX_REQUESTS_PER_WINDOW,
  duration: WINDOW_SECONDS
});
const consume = async (limiter, identifier) => {
  try {
    return { result: await limiter.consume(identifier), isLimited: false };
  } catch (error) {
    if (error instanceof RateLimiterRes) {
      return { result: error, isLimited: true };
    }
    throw error;
  }
};
const consumeRateLimit = async (identifier) => {
  const { result, isLimited } = await consume(sharedLimiter, identifier);
  return {
    isLimited,
    limit: MAX_REQUESTS_PER_WINDOW,
    remaining: result.remainingPoints,
    resetSeconds: Math.max(0, Math.ceil(result.msBeforeNext / MS_PER_SECOND))
  };
};
const rateLimitHeaders = (verdict) => {
  const headers2 = {
    "RateLimit-Policy": `${verdict.limit};w=${WINDOW_SECONDS}`,
    "RateLimit-Limit": String(verdict.limit),
    "RateLimit-Remaining": String(verdict.remaining),
    "RateLimit-Reset": String(verdict.resetSeconds)
  };
  if (verdict.isLimited) {
    headers2["Retry-After"] = String(verdict.resetSeconds);
  }
  return headers2;
};
const SECURITY_HEADERS = {
  "Cache-Control": "no-store",
  "Content-Security-Policy": "default-src 'none'; frame-ancestors 'none'",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-Permitted-Cross-Domain-Policies": "none"
};
const withExtraHeaders = (response, extra) => {
  const headers2 = new Headers(response.headers);
  for (const [name, value] of Object.entries(extra)) {
    if (!headers2.has(name)) {
      headers2.set(name, value);
    }
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers2
  });
};
const json = (value, init = {}) => withExtraHeaders(Response.json(value, init), SECURITY_HEADERS);
const apiError = (status, message) => json({ error: message }, { status });
const serverError = (error) => {
  const isProduction = process.env.NODE_ENV === "production";
  const cause = error instanceof Error ? error : new Error(String(error));
  return json(
    {
      message: "Something went wrong!",
      ...!isProduction && {
        error: {
          name: cause.name,
          message: cause.message,
          stack: cause.stack
        }
      }
    },
    { status: 500 }
  );
};
const runHandler = async (handler, args) => {
  const verdict = await consumeRateLimit(clientIdentifier(args.request));
  if (verdict.isLimited) {
    return withExtraHeaders(apiError(429, "Too many requests, please try again later"), rateLimitHeaders(verdict));
  }
  const extraHeaders = rateLimitHeaders(verdict);
  try {
    const result = await handler(args);
    const response = result instanceof Response ? withExtraHeaders(result, SECURITY_HEADERS) : json(result ?? null);
    return withExtraHeaders(response, extraHeaders);
  } catch (error) {
    if (error instanceof Response) {
      return withExtraHeaders(error, extraHeaders);
    }
    logger.error(error instanceof Error ? error.message : error, error instanceof Error ? error.stack : void 0);
    return withExtraHeaders(serverError(error), extraHeaders);
  }
};
const withApi = (handler) => {
  return async (args) => {
    const startedAt = Date.now();
    const response = await runHandler(handler, args);
    const { pathname } = new URL(args.request.url);
    logger.info(`${args.request.method} ${pathname} ${response.status} ${Date.now() - startedAt}ms`);
    return response;
  };
};
const loader$1 = withApi(async () => json({
  ok: true
}));
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
const notFound = withApi(async () => apiError(404, "Route not found"));
const loader = notFound;
const action = notFound;
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CchqbR0-.js", "imports": ["/assets/components-BLs7yCEQ.js", "/assets/errorBoundaries-M_RXiv-X.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": true, "module": "/assets/root-C85TnmuX.js", "imports": ["/assets/components-BLs7yCEQ.js", "/assets/errorBoundaries-M_RXiv-X.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/home-DlFq10AH.js", "imports": ["/assets/components-BLs7yCEQ.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/sitemap.xml": { "id": "routes/sitemap.xml", "parentId": "root", "path": "sitemap.xml", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": false, "hasErrorBoundary": false, "module": "/assets/sitemap.xml-l0sNRNKZ.js", "imports": [], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/robots.txt": { "id": "routes/robots.txt", "parentId": "root", "path": "robots.txt", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": false, "hasErrorBoundary": false, "module": "/assets/robots.txt-l0sNRNKZ.js", "imports": [], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/api.health": { "id": "routes/api.health", "parentId": "root", "path": "api/health", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": false, "hasErrorBoundary": false, "module": "/assets/api.health-l0sNRNKZ.js", "imports": [], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/api.$": { "id": "routes/api.$", "parentId": "root", "path": "api/*", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": false, "hasErrorBoundary": false, "module": "/assets/api._-l0sNRNKZ.js", "imports": [], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-40d5cfa2.js", "version": "40d5cfa2", "sri": void 0 };
const assetsBuildDirectory = "../../dist/apps/web/client";
const basename = "/";
const future = { "unstable_enableNodeReadableStream": false, "unstable_optimizeDeps": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/sitemap.xml": {
    id: "routes/sitemap.xml",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/robots.txt": {
    id: "routes/robots.txt",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/api.health": {
    id: "routes/api.health",
    parentId: "root",
    path: "api/health",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/api.$": {
    id: "routes/api.$",
    parentId: "root",
    path: "api/*",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
