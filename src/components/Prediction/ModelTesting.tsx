import React, { useState } from 'react';
import '../../styles/Imputation.css';

const ModelTesting: React.FC = () => {
    const [testResult, setTestResult] = useState<string>('');

    const handleTest = () => {
        setTestResult('测试中...');
        // 模拟测试过程
        setTimeout(() => {
            const resultText = `测试完成！
            [validation_eval {"MAE": 13.61364961507135, "RMSE": 19.35984801671848485, "MAPE": 9.13716098969073,}, stop_epoch:64]`;
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
                        rows={5} // 动态设置行数
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
                                <th>RMSE</th>
                                <th>MAPE</th>
                                <th>early_stopping_epoch</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>13.61</td>
                                <td>19.36</td>
                                <td>9.14</td>
                                <td>64</td>
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