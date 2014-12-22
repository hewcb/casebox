Ext.namespace('CB.DB');

CB.DB.defaultItemFields = [
    {name: 'nid', type: 'string'}
    ,{name: 'pid', type: 'int'}
    ,{name: 'system', type: 'int'}
    ,{name: 'status'}
    ,{name: 'task_status', type: 'int'}
    ,{name: 'template_id', type: 'int'}
    ,'template_type'
    ,'path'
    ,'name'
    ,'hl'
    ,'iconCls'
    ,{name: 'date', type: 'date'}
    ,{name: 'date_end', type: 'date'}
    ,{name: 'size', type: 'int'}
    ,{name: 'oid', type: 'int'}
    ,{name: 'cid', type: 'int'}
    ,{name: 'versions', type: 'int'}
    ,{name: 'cdate', type: 'date'}
    ,{name: 'udate', type: 'date'}
    ,'case'
    ,'content'
    ,{name: 'has_childs', type: 'bool'}
    ,{name: 'acl_count', type: 'int'}
    ,'cfg'
    ,'cls'
    ,'can'
    ,'group'
    ,'groupText'
];

Ext.define('Items', {
    extend: 'Ext.data.Model'
    ,alias: 'model.Items'
    ,fields: Ext.apply([], CB.DB.defaultItemFields)
});


Ext.define('DropDownListItems', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'int'}
        ,{name: 'text',  type: 'string'}
        ,{name: 'info',  type: 'string'}
        ,{name: 'descr',  type: 'string'}
    ]
});

Ext.define('ContentItem', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'int'}
        ,{name: 'pid', type: 'int'}
        ,'name'
        ,{name: 'template_id', type: 'int'}
        ,{name: 'cid', type: 'int'}
        ,'iconCls'
        ,'user'
        ,'cdate'
        ,'ago_text'
    ]
});

Ext.define('FieldObjects', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'int'}
        ,'name'
        ,{name: 'date', type: 'date'}
        ,{name: 'type', type: 'int'}
        ,{name: 'template_id', type: 'int'}
        ,{name: 'status', type: 'int'}
        ,'iconCls'
        ,'path'
        ,{name: 'size', type: 'int'}
        ,{name: 'oid', type: 'int'}
        ,{name: 'cid', type: 'int'}
        ,{name: 'cdate', type: 'date'}
        ,{name: 'udate', type: 'date'}
        ,'case'
    ]
});

Ext.define('ObjectsRecord', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'int'}
        ,'name'
        ,{name: 'date', type: 'date'}
        ,{name: 'template_id', type: 'int'}
        ,{name: 'status', type: 'int'}
        , 'iconCls'
        , 'cfg'
    ]
});

Ext.define('Generic', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'int'}
        ,{name: 'name',  type: 'string'}
        ,{name: 'iconCls',  type: 'string'}
    ]
});

Ext.define('Generic2', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'string'}
        ,{name: 'name',  type: 'string'}
    ]
});

Ext.define('GenericCount', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'string'}
        ,{name: 'name',  type: 'string'}
        ,{name: 'count',  type: 'int'}
    ]
});

Ext.define('EditGridRecord', {
    extend: 'Ext.data.Model'
    ,fields: [
        'id' // it's varchar generated by Ext
        ,'title'
        ,'readonly'
        ,'value'
        ,'info'
        ,'type'
        ,'cond' //condition used for search templates
    ]
});

Ext.define('Facet', {
    extend: 'Ext.data.Model'
    ,fields: [
        'id'
        ,'name'
        ,{
            name: 'active'
            ,type: 'int'
        }
        ,'last'
        ,'items'
        ,'new_items'
    ]
});

Ext.define('Filter', {
    extend: 'Ext.data.Model'
    ,fields: ['id', 'facetId', 'value', 'name']
});

Ext.define('AclRecord', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name:'id', type: 'int'}
        ,'name'
        ,'iconCls'
        ,'allow'
        ,'deny'
    ]
});

Ext.define('UploadRecord', {
    extend: 'Ext.data.Model'
    ,fields: ['id'
        ,{name:'group', type: 'int'}
        ,'name'
        ,'type'
        ,{name:'size', type: 'int'}
        ,{name:'loaded', type: 'int'}
        ,'pid'
        ,'dir'
        ,'pathtext'
        ,'file'
        ,{name: 'status', type: 'int'}
            /* 0 - ready to upload */
            /* 1 - uploading */
            /* 2 - upload error */
            /* 3 - upload timeout */
            /* 4 - upload abort */
            /* 5 - uploaded */
            /* 6 - skipped */
        ,'msg'
        ,'md5'
        ,{name: 'md5_verified', type: 'int'}
        ,'content_id'
        ,'response'
    ]
});

Ext.define('PhoneCode', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'code', type: 'string'}
        ,{name: 'name',  type: 'string'}
    ]
});

Ext.define('Language', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'int'}
        ,{name: 'abreviation', type: 'string'}
        ,{name: 'name',  type: 'string'}
        ,{name: 'long_date_format',  type: 'string'}
        ,{name: 'short_date_format',  type: 'string'}
        ,{name: 'time_format',  type: 'string'}
    ]
});

Ext.define('SecurityQuestion', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'int'}
        ,{name: 'text',  type: 'string'}
    ]
});

Ext.define('Template', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'int'}
        ,{name: 'pid', type: 'int'}
        ,'type'
        ,'title'
        ,'iconCls'
        ,{name: "cfg", convert: function(v, r){ return Ext.isEmpty(v) ? {} : v;}}
        ,'info_template'
        ,{name: 'visible', type: 'int'}
    ]
});

Ext.define('User', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'int'}
        ,{name: 'user',  type: 'string'}
        ,{name: 'name',  type: 'string'}
        ,{name: 'iconCls',  type: 'string'}
        ,{name: 'photo',  type: 'string'}
    ]
});

Ext.define('Group', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'int'}
        ,{name: 'name',  type: 'string'}
        ,{name: 'title',  type: 'string'}
        ,{name: 'system',  type: 'int'}
        ,{name: 'enabled',  type: 'int'}
        ,'iconCls'
    ]
    // ,proxy: {
    //     type: 'direct'
    //     ,paramsAsHash: true
    //     ,api: {
    //         read: 'CB_Security.getUserGroups'
    //         ,create: 'CB_Security.createUserGroup'
    //         ,update: 'CB_Security.updateUserGroup'
    //         ,destory: 'CB_Security.destroyUserGroup'

    //     }
    //     ,reader: {
    //         type: 'json'
    //         ,successProperty: 'success'
    //         ,idProperty: 'id'
    //         ,rootProperty: 'data'
    //         ,messageProperty: 'msg'
    //     }
    // }
});

Ext.define('Country', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'int'}
        ,{name: 'name',  type: 'string'}
        ,{name: 'phone_codes',  type: 'string'}
    ]
});

Ext.define('Timezone', {
    extend: 'Ext.data.Model'
    ,fields: [
        {name: 'id', type: 'string'}
        ,{name: 'gmt_offset',  type: 'string'}
        ,{name: 'caption',  type: 'string'}
    ]
});
