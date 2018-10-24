# KUBERNETES POD ADVANCED


# POD CONFIG FILE

## CREATION

Create a Config File `pod-creation.yml`
```
apiVersion: v1
kind: Pod
metadata:
  name: xbs-pod
  labels:
      app: random-name-app
      type: for-example-front-end
spec:
  containers:
    - name: container-name
      image: nginx
```

Options for `apiVersion` and `kind`:

![Options for apiVersion and kind](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/pod_apiversion_kind.png "Options for apiVersion and kind")

**apiVersion**

This is the version of the kubernetes API we’re using to create the object. Depending on what we are trying to create we must use the RIGHT apiVersion. 

For now since we are working on PODs, we will set the apiVersion as `v1`. 

Few other possible values for this field are `apps/v1beta1`, `extensions/v1beta1` etc. 


**kind**

The `kind` refers to the type of object we are trying to create, which in this case happens to be a `POD`. So we will set it as Pod. 

Some other possible values here could be `ReplicaSet` or `Deployment` or `Service`, which is what you see in the kind field in the table on the right.


**metadata**

The `metadata` is data about the object like its name, labels etc. 

As you can see unlike the first two were you specified a string value, this, is in the form of a dictionary. 

So everything under metadata is intended to the right a little bit and so names and labels are children of metadata. 

The number of spaces before the two properties name and labels doesn’t matter, but they should be the same as they are siblings. In this case labels has more spaces on the left than name and so it is now a child of the name property instead of a sibling. Also the two properties must have MORE spaces than its parent, which is metadata, so that its intended to the right a little bit. 

It’s IMPORTANT to note that under metadata, you can only specify `name` or `labels` or anything else that kubernetes expects to be under metadata. 

You CANNOT add any other property as you wish under this. 

However, under labels you CAN have any kind of key or value pairs as you see fit. So its IMPORTANT to understand what each of these parameters expect.


**spec**

Depending on the object we are going to create, this is were we provide additional information to kubernetes pertaining to that object. 

This is going to be different for different objects, so its important to understand or refer to the documentation section to get the right format for each. 

Since we are only creating a pod with a single container in it, it is easy. 

Spec is a dictionary so add a property under it called containers, which is a list or an array. The reason this property is a list is because the PODs can have multiple containers within them as we learned in the lecture earlier. In this case though, we will only add a single item in the list, since we plan to have only a single container in the POD. The item in the list is a dictionary, so add a name and image property. The value for image is nginx.



##  RUNNING

Run it to create a POD
```
kubectl create -f pod-creation.yml









































