import React, { useState } from 'react';
import '../../styles/Imputation.css';

const ModelTraining: React.FC = () => {
    // 预留参数
    const [param1, setParam1] = useState<string>(''); // epoch
    const [param2, setParam2] = useState<string>(''); // batch_size
    const [param3, setParam3] = useState<string>(''); // learning_rate
    const [param4, setParam4] = useState<string>(''); // dropout
    const [decayRate, setDecayRate] = useState<string>(''); // 膜电位衰减率
    const [threshold, setThreshold] = useState<string>(''); // 发放阈值

    // 处理参数提交
    const handleSubmitParams = () => {
        // 检查膜电位衰减率和发放阈值是否在 0~1 之间
        const decayRateNum = parseFloat(decayRate);
        const thresholdNum = parseFloat(threshold);

        if (isNaN(decayRateNum) || decayRateNum < 0 || decayRateNum > 1) {
            alert('脉冲神经网络膜电位衰减率必须在 0~1 之间！');
            return;
        }

        if (isNaN(thresholdNum) || thresholdNum < 0 || thresholdNum > 1) {
            alert('脉冲神经网络发放阈值必须在 0~1 之间！');
            return;
        }

        // 提交参数
        alert(`提交的参数：
        epoch: ${param1}
        batch_size: ${param2}
        learning_rate: ${param3}
        dropout: ${param4}
        膜电位衰减率: ${decayRate}
        发放阈值: ${threshold}`);
    };

    return (
        <div className="section-card">
            <h2>模型训练</h2>

            {/* 预留参数输入 */}
            <div className="form-group">
                <label htmlFor="param1">epoch 模型整体训练轮数（如 100）</label>
                <input
                    type="text"
                    id="param1"
                    value={param1}
                    onChange={(e) => setParam1(e.target.value)}
                    placeholder="10"
                />
            </div>
            <div className="form-group">
                <label htmlFor="param2">batch_size 批数据大小</label>
                <input
                    type="text"
                    id="param2"
                    value={param2}
                    onChange={(e) => setParam2(e.target.value)}
                    placeholder="32"
                />
            </div>
            <div className="form-group">
                <label htmlFor="param3">learning_rate 训练学习率</label>
                <input
                    type="text"
                    id="param3"
                    value={param3}
                    onChange={(e) => setParam3(e.target.value)}
                    placeholder="0.0001"
                />
            </div>
            <div className="form-group">
                <label htmlFor="param4">dropout 防止过拟合参数</label>
                <input
                    type="text"
                    id="param4"
                    value={param4}
                    onChange={(e) => setParam4(e.target.value)}
                    placeholder="0.5"
                />
            </div>

            {/* 新增参数：脉冲神经网络膜电位衰减率 */}
            <div className="form-group">
                <label htmlFor="decayRate">脉冲神经网络膜电位衰减率（0~1，默认 0.95）</label>
                <input
                    type="number"
                    id="decayRate"
                    value={decayRate}
                    onChange={(e) => setDecayRate(e.target.value)}
                    min="0"
                    max="1"
                    step="0.01"
                    placeholder="0.95"
                />
            </div>

            {/* 新增参数：脉冲神经网络发放阈值 */}
            <div className="form-group">
                <label htmlFor="threshold">脉冲神经网络发放阈值（0~1，默认 1）</label>
                <input
                    type="number"
                    id="threshold"
                    value={threshold}
                    onChange={(e) => setThreshold(e.target.value)}
                    min="0"
                    max="1"
                    step="0.01"
                    placeholder="1"
                />
            </div>

            {/* 参数提交按钮 */}
            <button className="submit-button" onClick={handleSubmitParams}>
                提交参数
            </button>
        </div>
    );
};

export default ModelTraining;