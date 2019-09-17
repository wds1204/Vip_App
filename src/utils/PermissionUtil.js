import Permissions from 'react-native-permissions';
import {
  Alert,
}from 'react-native';

class PermissionUtil{
  /**
   *
   * @param success
   * @param fail {"per":"camera","res":"denied"}
   *            per权限类型，
   *            res：失败原因——denied:用户至少一次拒绝此权限。(iOS - 在iOS上，这意味着用户不会再次被提示。 Android- 安卓用户可以被多次提示，直到他们选择“永远不要再问我)
   *                          restricted:(iOS - 这意味着用户不能授予这个权限，要么是因为设备不支持它，要么是因为它被父母的控制阻止了。Android - 这意味着用户在拒绝许可的同时选择了“永远不要再问我”)
   *
   * @param permission
   */
  checkPermission = (success,fail,permission = []) => {
    let self = this;
    let flag = true;
    let per = [];
    if(permission.length<=0){
      return;
    }
    Permissions.checkMultiple(permission)
      .then(status => {//直接修改设置 检测不到授权结果
        console.log('status',status);
        Object.keys(status).map((k,v)=>{
          if(status[k]=="authorized"){
          }else{
            per.push(k);
            flag=false;
          }
        });
        if(flag){
          success();
        }else{
          if(per.length>0){
            self.request(success,fail,per,0);
          }
        }
      })
  };

  request = (success,fail,per,i)=>{
    if(i<per.length){
      console.log('per',per);
      this.requestPermission(success,fail,per,i);
    }else{
      success();
    }
  };

  requestPermission = (success,fail,per,i) => {
    let self = this;
    console.log('per[i]',per[i]);
    Permissions.request(per[i])
      .then(res => {
        console.log('res',res);
        if (res != 'authorized') {
          if(fail){
            fail({per:per[i],res});
            return;
          }
          switch (per[i]){
            case "camera":
              Alert.alert(
                '无法使用!',
                "请授予应用使用相机权限",
                [
                  {text: '取消', style: 'cancel'},
                  {text: '设置权限', onPress: Permissions.openSettings},
                ]
              );
              break;
            case "photo":
              Alert.alert(
                '无法访问!',
                "请授予应用访问存储sd卡权限",
                [
                  {text: '取消', style: 'cancel'},
                  {text: '设置权限', onPress: Permissions.openSettings},
                ]
              );
              break;
            case "location":
              Alert.alert(
                '无法访问!',
                "请授予应用访问位置信息权限",
                [
                  {text: '取消', style: 'cancel'},
                  {text: '设置权限', onPress: Permissions.openSettings},
                ]
              );
              break;
            case "microphone":
              Alert.alert(
                '无法访问!',
                "请授予应用录音权限",
                [
                  {text: '取消', style: 'cancel'},
                  {text: '设置权限', onPress: Permissions.openSettings},
                ]
              );
              break;
            case "contacts":
              Alert.alert(
                '无法访问!',
                "请授予应用获取联系人权限",
                [
                  {text: '取消', style: 'cancel'},
                  {text: '设置权限', onPress: Permissions.openSettings},
                ]
              );
              break;
            default:
              Alert.alert(
                '无法访问!',
                "请授予应用权限",
                [
                  {text: '取消', style: 'cancel'},
                  {text: '设置权限', onPress: Permissions.openSettings},
                ]
              );
              break;
          }
        } else {
          self.request(success,fail,per,++i);
        }
      }).catch(e => console.log(e))
  };
}

export default new PermissionUtil();
