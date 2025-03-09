const getZoomValue = (
  rarity: IRarityType,
  bodyType: IBodyType,
  isTraveler: boolean,
  isArchon: boolean
) => {
  let zoomValue = 1.7;

  if (isTraveler) {
    zoomValue = 2.5;

    return zoomValue;
  } else {
    //   Scenarios, if bodyType = BODY_LOLI, add 0.4 to zoomValue
    //   Scenarios, if bodyType = BODY_GIRL, add 0.1 to zoomValue
    //   Scenarios, if bodyType = BODY_LADY, add 0.1 to zoomValue
    //   Scenarios if rarity = QAULITY_PURPLE, add 0.2 to zoomValue
    //   Scenarios if isArchon add 0.3 to zoomValue
    //  Scenarioos if also an archon and a LOLI remove LOLI value

    if (bodyType === "BODY_LOLI") {
      zoomValue += 0.4;
    } else if (bodyType !== "BODY_MALE") {
      zoomValue += 0.1;
    }

    if (rarity === "QUALITY_PURPLE") {
      zoomValue += 0.2;
    }

    if (isArchon) {
      zoomValue += 0.3;
    }

    if (isArchon && bodyType === "BODY_LOLI") {
      zoomValue -= 0.4;
    }

    return zoomValue;
  }
};

const getMarginRightValue = (bodyType: IBodyType, isTraveler: boolean) => {
  let marginRightValue = 0;
  if (isTraveler) {
    marginRightValue = 30;
    return marginRightValue;
  }

  if (bodyType === "BODY_MALE") {
    marginRightValue = -10;
  } else {
    marginRightValue = -5;
  }

  //if marginValue is negative add -mr to the value, if not add mr
  if (marginRightValue < 0) {
    return `-mr-${Math.abs(marginRightValue)}`;
  } else {
    return `mr-${marginRightValue}`;
  }
};

export { getMarginRightValue, getZoomValue };
