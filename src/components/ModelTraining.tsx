import React, { useState } from 'react';
import '../styles/Imputation.css';

const ModelTraining: React.FC = () => {
    const [param1, setParam1] = useState<string>(''); // 预留参数 1
    const [param2, setParam2] = useState<string>(''); // 预留参数 2
    const [param3, setParam3] = useState<string>(''); // 预留参数 3
    const [param4, setParam4] = useState<string>(''); // 预留参数 4

    const handleSubmitParams = () => {
        alert(`提交的参数：
        参数 1: ${param1}
        参数 2: ${param2}
        参数 3: ${param3}
        参数 4: ${param4}`);
    };

    return (
        <div className="section-card">
            <h2>模型训练</h2>
            <div className="form-group">
                <label htmlFor="param1">epoch 模型整体训练论数(如100)</label>
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

            {/* 参数提交按钮 */}
            <button className="submit-button" onClick={handleSubmitParams}>
                提交参数
            </button>
        </div>
    );
};

export default ModelTraining;
