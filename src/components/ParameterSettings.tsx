import React, { useState } from 'react';
import '../styles/Imputation.css';

const ParameterSettings: React.FC = () => {
  const [ratio, setRatio] = useState<string>('80,10,10'); // 比例参数
  const [seed, setSeed] = useState<number>(42); // seed 参数
  const [maxImputationLength, setMaxImputationLength] = useState<number>(10); // 最大插补长度
  const [weightThreshold, setWeightThreshold] = useState<number>(0.5); // 有权边转为无权边阈值
  const [submittedParams, setSubmittedParams] = useState<{
    ratio: string;
    seed: number;
    maxImputationLength: number;
    weightThreshold: number;
  } | null>(null);
  const [options, setOptions] = useState<{
    adaptiveImputation: boolean;
    normalizeAdjMatrix: boolean;
  }>({
    adaptiveImputation: false,
    normalizeAdjMatrix: false,
  });
  const [processingResult, setProcessingResult] = useState<string>(''); // 处理结果

// 处理比例输入
    const handleRatioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // 验证输入格式是否为 "x,y,z"
        if (/^\d+,\d+,\d+$/.test(value)) {
            setRatio(value);
        }
    };

    // 处理选项提交
    const handleSubmitOptions = () => {
        alert(`提交的选项：
        是否采用自适应缺失值插补: ${options.adaptiveImputation ? '是' : '否'}
        邻接矩阵数据是否需要归一化处理: ${options.normalizeAdjMatrix ? '是' : '否'}`);
    };

    // 处理参数提交
    const handleSubmitParams = () => {
        setSubmittedParams({
            ratio,
            seed,
            maxImputationLength,
            weightThreshold,
        });
    };

    // 处理数据
    const handleProcessData = () => {
        // 模拟数据处理逻辑
        setTimeout(() => {
            setProcessingResult('数据处理完成！');
        }, 2000);
    };

    return (
        <div className="section-card">
            <h2>预处理参数设置</h2>
            {/* 选项提交部分 */}
            <div className="options-submission">
            <h3>选项提交</h3>
            <div className="options-checkbox">
                <label>
                <input
                    type="checkbox"
                    checked={options.normalizeAdjMatrix}
                    onChange={(e) =>
                    setOptions({ ...options, normalizeAdjMatrix: e.target.checked })
                    }
                />
                邻接矩阵数据是否需要归一化处理
                </label>
                <p className="option-description">
                不同数据来源的数据集预处理程度存在差别，请用户结合需求进行选择。
                </p>
            </div>
            <button
                type="button"
                onClick={handleSubmitOptions}
                className="submit-button"
            >
                提交选项
            </button>
            </div>

            {/* 参数提交部分 */}
            <div className="parameter-submission">
            <h3>参数提交</h3>
            <form>
                <div className="form-group">
                <label htmlFor="maxImputationLength">最大插补长度：</label>
                <p className="parameter-description">
                由用户决定是否对长序列连续缺失值进行插补
                </p>
                <input
                    type="number"
                    id="maxImputationLength"
                    name="maxImputationLength"
                    value={maxImputationLength}
                    onChange={(e) => setMaxImputationLength(parseInt(e.target.value))}
                />      
                </div>
                <div className="form-group">
                <label htmlFor="weightThreshold">有权边转为无权边阈值：</label>
                <p className="parameter-description">
                小于阈值的边会被自动剔除，大于阈值的边权值赋值为1。
                </p>
                <input
                    type="number"
                    id="weightThreshold"
                    name="weightThreshold"
                    step="0.1"
                    min="0"
                    max="1"
                    value={weightThreshold}
                    onChange={(e) => setWeightThreshold(parseFloat(e.target.value))}
                />
                </div>
                <div className="form-group">
                <label htmlFor="ratio">Ratio：</label>
                <p className="parameter-description">
                训练集，验证集，测试集的划分比例参数 (如80,10,10)
                </p>
                <input
                    type="text"
                    id="ratio"
                    name="ratio"
                    value={ratio}
                    onChange={handleRatioChange}
                    placeholder="例如：80,10,10"
                />
                </div>
                <div className="form-group">
                <label htmlFor="seed">Seed：</label>
                <p className="parameter-description">
                数据随机划分使用的随机数种子（正整数）
                </p>
                <input
                    type="number"
                    id="seed"
                    name="seed"
                    value={seed}
                    onChange={(e) => setSeed(parseInt(e.target.value))}
                />
                </div>
                <button type="button" onClick={handleSubmitParams} className="submit-button">
                提交参数
                </button>
            </form>

            {/* 提交参数结果显示 */}
            {submittedParams && (
                <div className="submitted-params">
                <h4>提交的参数：</h4>
                <p>最大插补长度: {submittedParams.maxImputationLength}</p>
                <p>有权边转为无权边阈值: {submittedParams.weightThreshold}</p>
                <p>Ratio: {submittedParams.ratio}</p>
                <p>Seed: {submittedParams.seed}</p>
                </div>
            )}
            </div>

            {/* 处理数据部分 */}
            <div className="data-processing">
            <h3>处理数据</h3>
            <button onClick={handleProcessData} className="submit-button">
                处理数据
            </button>

            {/* 处理结果显示 */}
            <div className="result-textbox">
                <h4>处理结果：</h4>
                <textarea
                readOnly
                value={processingResult}
                placeholder="处理结果将显示在这里"
                />
            </div>
            </div>
        </div>
    );
};

export default ParameterSettings;