import React, { useState } from 'react';
import '../styles/Imputation.css';

const ParameterSettings: React.FC = () => {
    const [ratio, setRatio] = useState<string>('80,10,10'); // 比例参数
    const [seed, setSeed] = useState<number>(42); // seed 参数
    const [dropoutPercentage, setDropoutPercentage] = useState<number>(5); // 随机丢弃数据百分比
    const [submittedParams, setSubmittedParams] = useState<{
        ratio: string;
        seed: number;
        dropoutPercentage: number;
    } | null>(null);
    const [options, setOptions] = useState<{
        normalizeAdjMatrix: boolean;
    }>({
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
        邻接矩阵数据是否需要归一化处理: ${options.normalizeAdjMatrix ? '是' : '否'}`);
    };

    // 处理参数提交
    const handleSubmitParams = () => {
        setSubmittedParams({
            ratio,
            seed,
            dropoutPercentage,
        });
    };

    // 处理数据
    const handleProcessData = () => {
        setProcessingResult('数据随机丢弃（训练用）\n……\n完成\n——————————————\n');

        // 模拟邻接矩阵归一化
        setTimeout(() => {
            setProcessingResult(
                (prev) => prev + '邻接矩阵归一化\n……\n完成\n——————————————\n'
            );

            // 模拟数据集划分
            setTimeout(() => {
                setProcessingResult(
                    (prev) => prev + '数据集划分\n……\n完成\n——————————————\n'
                );

                // 模拟数据处理完成
                setTimeout(() => {
                    setProcessingResult(
                        (prev) =>
                            prev +
                            `数据处理全部完成。\n随机丢弃比例：${dropoutPercentage}%\n训练集数量：8  验证集数量：1  测试集数量：1\n`
                    );
                }, 1000); // 1 秒后显示最终结果
            }, 1000); // 1 秒后显示数据集划分结果
        }, 1000); // 1 秒后显示邻接矩阵归一化结果
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
                        <label htmlFor="dropoutPercentage">随机丢弃数据百分比（默认5%）：</label>
                        <p className="parameter-description">
                            此参数仅作为训练参数使用，与最终插补无关，不会丢失已有的真实值。
                        </p>
                        <input
                            type="number"
                            id="dropoutPercentage"
                            name="dropoutPercentage"
                            min="0"
                            max="100"
                            value={dropoutPercentage}
                            onChange={(e) => setDropoutPercentage(parseInt(e.target.value))}
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
                        <p>随机丢弃数据百分比: {submittedParams.dropoutPercentage}%</p>
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
                        rows={15} // 设置文本框高度
                    />
                </div>
            </div>
        </div>
    );
};

export default ParameterSettings;