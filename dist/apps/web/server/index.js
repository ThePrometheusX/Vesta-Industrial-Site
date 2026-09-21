import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useEffect } from "react";
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
  links
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-C7TFtWNI.js", "imports": ["/assets/components-CBotn9Lm.js", "/assets/errorBoundaries-CPZQvEXz.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": true, "module": "/assets/root-CP5k6LiZ.js", "imports": ["/assets/components-CBotn9Lm.js", "/assets/errorBoundaries-CPZQvEXz.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/home-CGoM5CSL.js", "imports": ["/assets/components-CBotn9Lm.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-a207e34a.js", "version": "a207e34a", "sri": void 0 };
const route1 = { default: () => null };
const assetsBuildDirectory = "../../dist/apps/web/client";
const basename = "/";
const future = { "unstable_enableNodeReadableStream": false, "unstable_optimizeDeps": false };
const ssr = false;
const isSpaMode = true;
const prerender = [];
const routeDiscovery = { "mode": "initial" };
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
