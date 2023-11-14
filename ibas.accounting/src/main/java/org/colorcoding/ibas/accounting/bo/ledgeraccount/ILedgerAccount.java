package org.colorcoding.ibas.accounting.bo.ledgeraccount;

import java.math.*;

import org.colorcoding.ibas.bobas.bo.*;
import org.colorcoding.ibas.bobas.data.*;

/**
* 分类账 接口
* 
*/
public interface ILedgerAccount extends IBOSimple {

    /**
    * 获取-标识
    * 
    * @return 值
    */
    String getSign();

    /**
    * 设置-标识
    * 
    * @param value 值
    */
    void setSign(String value);


    /**
    * 获取-组
    * 
    * @return 值
    */
    String getGroup();

    /**
    * 设置-组
    * 
    * @param value 值
    */
    void setGroup(String value);


    /**
    * 获取-描述
    * 
    * @return 值
    */
    String getDescription();

    /**
    * 设置-描述
    * 
    * @param value 值
    */
    void setDescription(String value);


    /**
    * 获取-设置
    * 
    * @return 值
    */
    String getSettings();

    /**
    * 设置-设置
    * 
    * @param value 值
    */
    void setSettings(String value);


    /**
    * 获取-编号
    * 
    * @return 值
    */
    Integer getObjectKey();

    /**
    * 设置-编号
    * 
    * @param value 值
    */
    void setObjectKey(Integer value);


    /**
    * 获取-类型
    * 
    * @return 值
    */
    String getObjectCode();

    /**
    * 设置-类型
    * 
    * @param value 值
    */
    void setObjectCode(String value);


    /**
    * 获取-实例号（版本）
    * 
    * @return 值
    */
    Integer getLogInst();

    /**
    * 设置-实例号（版本）
    * 
    * @param value 值
    */
    void setLogInst(Integer value);


    /**
    * 获取-数据源
    * 
    * @return 值
    */
    String getDataSource();

    /**
    * 设置-数据源
    * 
    * @param value 值
    */
    void setDataSource(String value);


    /**
    * 获取-编号系列
    * 
    * @return 值
    */
    Integer getSeries();

    /**
    * 设置-编号系列
    * 
    * @param value 值
    */
    void setSeries(Integer value);


    /**
    * 获取-创建日期
    * 
    * @return 值
    */
    DateTime getCreateDate();

    /**
    * 设置-创建日期
    * 
    * @param value 值
    */
    void setCreateDate(DateTime value);


    /**
    * 获取-创建时间
    * 
    * @return 值
    */
    Short getCreateTime();

    /**
    * 设置-创建时间
    * 
    * @param value 值
    */
    void setCreateTime(Short value);


    /**
    * 获取-修改日期
    * 
    * @return 值
    */
    DateTime getUpdateDate();

    /**
    * 设置-修改日期
    * 
    * @param value 值
    */
    void setUpdateDate(DateTime value);


    /**
    * 获取-修改时间
    * 
    * @return 值
    */
    Short getUpdateTime();

    /**
    * 设置-修改时间
    * 
    * @param value 值
    */
    void setUpdateTime(Short value);


    /**
    * 获取-创建用户
    * 
    * @return 值
    */
    Integer getCreateUserSign();

    /**
    * 设置-创建用户
    * 
    * @param value 值
    */
    void setCreateUserSign(Integer value);


    /**
    * 获取-修改用户
    * 
    * @return 值
    */
    Integer getUpdateUserSign();

    /**
    * 设置-修改用户
    * 
    * @param value 值
    */
    void setUpdateUserSign(Integer value);


    /**
    * 获取-创建动作标识
    * 
    * @return 值
    */
    String getCreateActionId();

    /**
    * 设置-创建动作标识
    * 
    * @param value 值
    */
    void setCreateActionId(String value);


    /**
    * 获取-更新动作标识
    * 
    * @return 值
    */
    String getUpdateActionId();

    /**
    * 设置-更新动作标识
    * 
    * @param value 值
    */
    void setUpdateActionId(String value);


    /**
    * 获取-备注
    * 
    * @return 值
    */
    String getRemarks();

    /**
    * 设置-备注
    * 
    * @param value 值
    */
    void setRemarks(String value);



}