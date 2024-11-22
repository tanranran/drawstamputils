// 防伪纹路
export type ISecurityPattern = {
    openSecurityPattern: boolean // 是否启用防伪纹路
    securityPatternWidth: number // 防伪纹路宽度
    securityPatternLength: number // 防伪纹路长度
    securityPatternCount: number // 防伪纹路数量
    securityPatternAngleRange: number // 防伪纹路角度范围
    securityPatternParams: Array<{ angle: number; lineAngle: number }> // 保存防伪纹路的参数数组
}

export type IRoughEdgeParams = {
    angle: number
    size: number
}
// 毛边效果
export type IRoughEdge = {
    drawRoughEdge: boolean // 是否绘制毛边效果
    roughEdgeWidth: number // 毛边宽度
    roughEdgeHeight: number // 毛边高度，按照边缘宽度的百分比
    roughEdgeShift: number // 偏移
    roughEdgeParams: IRoughEdgeParams[] // 新增：用于存储毛边参数
    roughEdgeProbability: number // 毛边概率
    roughEdgePoints: number // 毛边点数
}

// 绘制印章的公司
export type ICompany = {
    companyName: string // 公司名称
    compression: number // 公司名称压缩比例
    borderOffset: number // 边框偏移量
    textDistributionFactor: number // 字分布因子
    fontFamily: string // 字体
    fontHeight: number // 字体高度
    fontWeight: string | number // 字体粗细
    shape: 'ellipse' | 'rectangle' // 新增：印章形状
    adjustEllipseText: boolean // 是否调整椭圆
    adjustEllipseTextFactor: number // 调整椭圆的因子
}

// 印章编码
export type ICode = {
    code: string // 编码
    compression: number // 编码压缩比例
    fontHeight: number // 编码字体大小
    fontFamily: string // 编码字体
    borderOffset: number // 编码边框偏移量
    fontWidth: number // 编码字体宽度
    textDistributionFactor: number // 文字分布因子
    fontWeight: string | number // 编码字体粗细
}

export type ITaxNumber = {
    code: string // 税号
    compression: number // 税号压缩比例
    fontHeight: number // 税号字体大小
    fontFamily: string // 编码字体
    fontWidth: number // 编码字体宽度
    letterSpacing: number // 编码字符间距
    positionY: number // 编码文字位置
    totalWidth: number // 编码文字总宽度
    fontWeight: string | number // 税号字体粗细
}

// 做旧效果参数
export type IAgingEffectParams = {
    x: number // x轴位置
    y: number // y轴位置
    noiseSize: number // 噪声大小
    noise: number // 噪声强度
    strongNoiseSize: number // 强噪声大小
    strongNoise: number // 强噪声强度
    fade: number // 淡化强度
    seed: number // 随机种子
}

// 做旧效果
export type IAgingEffect = {
    applyAging: boolean // 是否应用做旧效果
    agingIntensity: number // 做旧效果强度
    agingEffectParams: IAgingEffectParams[] // 保存做旧效果的参数数组
}

// 绘制五角星
export type IDrawStar = {
    svgPath: string // svg路径
    drawStar: boolean // 是否绘制五角星
    starDiameter: number // 五角星直径
    starPositionY: number // 五角星位置
    scaleToSmallStar: boolean // 是否缩放为小五角星
    useImage: boolean // 是否使用图片
    imageUrl: string // 图片URL
    imageWidth: number // 图片宽度(mm)
    imageHeight: number // 图片高度(mm)
    keepAspectRatio: boolean // 是否保持宽高比
}

// 印章类型
export type IStampType = {
    stampType: string // 印章类型
    fontHeight: number // 字体高度
    fontFamily: string // 编码字体
    compression: number // 压缩比例
    letterSpacing: number // 字符间距
    positionY: number // 位置
    fontWidth: number // 字体宽度
    fontWeight: string | number // 字体粗细
    lineSpacing: number // 新增：行间距
}

// 内圈圆
export type IInnerCircle = {
    drawInnerCircle: boolean // 是否绘制内圈圆
    innerCircleLineWidth: number // 内圈圆线宽
    innerCircleLineRadiusX: number // x轴半径
    innerCircleLineRadiusY: number // y轴半径
}

// 是否绘制标尺
export type IShowRuler = {
    showRuler: boolean // 是否绘制标尺
    showFullRuler: boolean // 是否绘全标尺
}

// 绘制印章的参数
export type IDrawStampConfig = {
    roughEdge: IRoughEdge // 毛边效果
    agingEffect: IAgingEffect // 做旧效果
    ruler: IShowRuler // 是否绘制标尺
    drawStar: IDrawStar // 是否绘制五角星
    securityPattern: ISecurityPattern
    company: ICompany // 公司
    stampCode: ICode // 印章编码
    taxNumber: ITaxNumber // 税号
    stampType: IStampType // 印章类型
    width: number // 印章宽度
    height: number // 印章高度
    borderWidth: number // 印章边框宽度
    primaryColor: string // 印章主色
    refreshSecurityPattern: boolean // 是否刷新防伪纹路
    refreshOld: boolean // 是否刷新做旧效果
    shouldDrawRuler: boolean // 是否绘制标尺
    innerCircle: IInnerCircle // 内圈圆
    outThinCircle: IInnerCircle // 比外圈细的稍微内圈
    openManualAging: boolean // 是否开启手动做旧效果
    stampTypeList: IStampType[] // 印章类型列表
    companyList: ICompany[] // 新增：公司名称列表
    innerCircleList: IInnerCircle[] // 新增：内圈圆列表
}