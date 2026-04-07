const logo = new Proxy({"src":"/_astro/logo.a9g0Q0nj.png","width":421,"height":497,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/josefscarantino/Documents/_Josef.co/astrowind/src/assets/images/logo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/Users/josefscarantino/Documents/_Josef.co/astrowind/src/assets/images/logo.png");
							return target[name];
						}
					});

export { logo as default };
