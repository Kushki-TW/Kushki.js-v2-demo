/**
 * Injection identifiers
 */

export type containerSymbol = {
  KushkiGateway: symbol;
  SiftScienceService: symbol;
  Cardinal3DSProvider: symbol;
  Sandbox3DSProvider: symbol;
};

const IDENTIFIERS: containerSymbol = {
  Cardinal3DSProvider: Symbol.for("Cardinal3DSProvider"),
  KushkiGateway: Symbol.for("KushkiGateway"),
  Sandbox3DSProvider: Symbol.for("Sandbox3DSProvider"),
  SiftScienceService: Symbol.for("SiftScienceService")
};

export { IDENTIFIERS };
