import React, { useState } from 'react';
import '../../styles/Imputation.css';

const ModelTesting: React.FC = () => {
    const [testResult, setTestResult] = useState<string>('');

    const handleTest = () => {
        setTestResult('测试中...');
        // 模拟测试过程
        setTimeout(() => {
            const resultText = `测试完成！
            [validation_eval {"MAE": 0.5938144329896907, "MSE": 1.2003598484848485, "MRE": 0.9381443298969073,}, stop_epoch:113]`;
            setTestResult(resultText);
        }, 2000);
    };

    return (
            <div className="section-card">
                <h2>模型测试</h2>
                <button className="submit-button" onClick={handleTest}>
                    开始测试
                </button>

                {/* 测试结果显示 */}
                <div className="result-textbox">
                    <h4>测试结果：</h4>
                    <textarea
                        readOnly
                        value={testResult}
                        rows={2} // 动态设置行数
                        style={{ width: '100%', resize: 'none' }} // 禁止用户调整大小
                    />
                </div>

            {/* 表格和图片并列布局 */}
            <div className="result-container">
                {/* 表格 */}
                <div className="result-table">
                    <h4>测试集预测结果</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>MAE</th>
                                <th>MSE</th>
                                <th>MRE</th>
                                <th>early_stopping_epoch</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0.49</td>
                                <td>1.20</td>
                                <td>0.93</td>
                                <td>113</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                {/* 图片 */}
                <div className="result-image">
                    <h4>不同迭代次数误差折线图</h4>
                    <img
                        src="result.png" // 图片路径a
                        alt="误差折线图"
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModelTesting;