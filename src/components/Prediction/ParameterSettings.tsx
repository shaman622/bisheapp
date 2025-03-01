import React, { useState } from 'react';
import '../../styles/Imputation.css';

const ParameterSettings: React.FC = () => {
    const [ratio, setRatio] = useState<string>('80,10,10'); // 比例参数
    const [seed, setSeed] = useState<number>(42); // seed 参数
    const [submittedParams, setSubmittedParams] = useState<{
        ratio: string;
        seed: number;
    } | null>(null);
    const [processingResult, setProcessingResult] = useState<string>(''); // 处理结果

    // 处理比例输入
    const handleRatioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // 验证输入格式是否为 "x,y,z"
        if (/^\d+,\d+,\d+$/.test(value)) {
            setRatio(value);
        }
    };

    // 处理参数提交
    const handleSubmitParams = () => {
        setSubmittedParams({
            ratio,
            seed
        });
    };

    // 处理数据
    const handleProcessData = () => {
        setProcessingResult('数据集划分\n……\n完成\n——————————————\n');

        // 模拟数据处理完成
        setTimeout(() => {
            setProcessingResult(
                (prev) =>
                    prev +
                    `数据处理全部完成。\n训练集数量：8  验证集数量：1  测试集数量：1\n`
            );
        }, 1000); // 1 秒后显示最终结果
    };
    return (
        <div className="section-card">
            <h2>预处理参数设置</h2>

            {/* 参数提交部分 */}
            <div className="parameter-submission">
                <h3>参数提交</h3>
                <form>
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