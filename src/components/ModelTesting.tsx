import React, { useState } from 'react';
import '../styles/Imputation.css';

const ModelTesting: React.FC = () => {
    const [testData] = useState<File | null>(null);
    const [metrics] = useState<string>('accuracy');
    const [testResult, setTestResult] = useState<string>('');

    const handleTest = () => {
        if (!testData) {
            alert('请先上传测试数据！');
            return;
        }
        setTestResult('测试中...');
        // 模拟测试过程
        setTimeout(() => {
            setTestResult(`测试完成！
            评估指标: ${metrics}
            测试文件: ${testData.name}`);
        }, 2000);
    };

    return (
        <div className="section-card">
            <h2>模型测试</h2>
            <button className="submit-button" onClick={handleTest}>
                开始测试
            </button>
            <div className="result-textbox">
                <h4>测试结果：</h4>
                <textarea readOnly value={testResult} />
            </div>
        </div>
    );
};

export default ModelTesting;